import { createElement, ReactElement } from "react";
import { AmapProps } from "../typings/AmapProps";
import { AmapStyle } from "./ui/Styles";
import { MapView, MapType } from "react-native-amap3d";

export function Amap(props: AmapProps<AmapStyle>): ReactElement {
    // const styles = flattenStyles(defaultAmapStyle, props.style);

    // const renderText = useCallback(() => {
    //     return (
    //         <Text testID={`${props.name}$caption`} style={styles.caption}>
    //             demo
    //         </Text>
    //     );
    // }, [props.caption, styles]);
    console.log(props);

    return (
        <MapView
            mapType={MapType.Satellite}
            initialCameraPosition={{
                target: {
                    latitude: 39.91095,
                    longitude: 116.37296,
                },
                zoom: 8,
            }}
        />
    );
}
