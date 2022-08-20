export interface IClassOf<T> {
    new (... a: any[]): T;
}

export interface IDotNet {
    getClass<T>(name: string): IClassOf<T>;
}

const DotNet: {
    isAvailable: boolean;
    getClass(name: string): any;
} = (window as any).dotNet ?? {
    getClass(name) {
    }
};

DotNet.isAvailable = !!(window as any).dotNet;

function create(name: string, ns: string, nsAssembly: string) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            const value = DotNet.getClass(`${ns}.${name}, ${nsAssembly}`);
            Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value
            });
            return value;
        }
    };
}


export function dotNetInit(a, ns, nsAssembly) {
    for (const key in a) {
        if (key && Object.prototype.hasOwnProperty.call(a, key)) {
            const e = a[key];
            if (typeof e === "function") {
                Object.defineProperty(a, key, create(key, ns, nsAssembly));
            }
        }
    }
}

export default DotNet;
