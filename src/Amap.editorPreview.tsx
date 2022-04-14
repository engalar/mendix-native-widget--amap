import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { AmapPreviewProps } from "../typings/AmapProps";

declare function require(name: string): string;

export function preview(props: AmapPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
