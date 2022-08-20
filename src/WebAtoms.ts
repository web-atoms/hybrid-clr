import DotNet, { dotNetInit } from "./DotNet";
import RootObject from "./RootObject";

export namespace WebAtoms {

    export namespace Hybrid {
        export class HybridApplication extends RootObject {
            static current: HybridApplication;
            static deviceToken: string;
            static badge: number;
            static appUrl: string;
            static urlRequested: string;
        }

        export namespace Media {

            export enum Preset {
                LowQuality = "LowQuality",
                MediumQuality = "MediumQuality",
                HighestQuality = "HighestQuality",
                Preset640x480 = "Preset640x480",
                Preset960x540 = "Preset960x540",
                Preset1280x720 = "Preset1280x720",
                Preset1920x1080 = "Preset1920x1080",
                Preset3840x2160 = "Preset3840x2160",
                Passthrough = "Passthrough",
            }

            export class HybridMedia extends RootObject {

                static instance: HybridMedia;

                public chooseVideoAsync(preset: Preset, progress: (n) => void): Promise<File> {
                    return null;
                }

                public encodeMP4Async(inputFile: string, preset: Preset, progress: (n) => void): Promise<string> {
                    return null;
                }
            }
        }
    }

}

dotNetInit((WebAtoms as any).Hybrid ??= {}, "WebAtoms.Hybrid", "WebAtoms.Hybrid");
dotNetInit((WebAtoms as any).Hybrid.Media ??= {}, "WebAtoms.Hybrid.Media", "WebAtoms.Hybrid.Media");