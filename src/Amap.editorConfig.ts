import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { AmapPreviewProps } from "../typings/AmapProps";

export function getProperties(
    values: AmapPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: AmapPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
