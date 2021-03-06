import { TextStyle, ViewStyle } from "react-native";
import { Style } from "../piw-native-utils-internal";

export interface AmapStyle extends Style {
    container: ViewStyle & { rippleColor?: string };
    caption: TextStyle;
}

export const defaultAmapStyle: AmapStyle = {
    container: {
        alignSelf: "baseline",
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: "#ccc",
        justifyContent: "center"
    },
    caption: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#444"
    }
};
