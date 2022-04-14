/**
 * This file was generated from Amap.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";

export interface AmapProps<Style> {
    name: string;
    style: Style[];
    caption: DynamicValue<string>;
    onClick?: ActionValue;
}

export interface AmapPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    caption: string;
    onClick: {} | null;
}
