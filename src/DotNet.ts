export interface IClassOf<T> {
    new (... a: any[]): T;
}

export interface IDotNet {
    getClass<T>(name: string): IClassOf<T>;
}

declare var dotNet: IDotNet;

const DotNet = dotNet;

function create(name: string, ns: string, nsAssembly: string) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            const t = DotNet.getClass(`${ns}.${name}, ${nsAssembly}`);
            Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: t
            });
            return t;
        }
    };
}


export function dotNetInit(a, ns, nsAssembly) {
    for (const key in a) {
        if (Object.prototype.hasOwnProperty.call(a, key)) {
            a[key] = create(key, ns, nsAssembly)
        }
    }
}

export default DotNet;
