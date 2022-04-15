/**
 * This file was generated from Amap.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface AmapProps<Style> {
    name: string;
    style: Style[];
    points: ListValue;
    latitude: ListAttributeValue<Big>;
    longitude: ListAttributeValue<Big>;
}

export interface AmapPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    points: {} | { type: string } | null;
    latitude: string;
    longitude: string;
}
