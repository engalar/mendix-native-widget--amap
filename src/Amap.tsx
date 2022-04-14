import { createElement, ReactElement, useEffect } from "react";
import { AmapProps } from "../typings/AmapProps";
import { AmapStyle } from "./ui/Styles";
import { MapView, MapType } from "react-native-amap3d";
import { AMapSdk } from "react-native-amap3d";
import { Platform } from 'react-native';

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

    useEffect(() => {
        AMapSdk.init(
            Platform.select({
                android: "c52c7169e6df23490e3114330098aaac",
                ios: "186d3464209b74effa4d8391f441f14d",
            })
        );

        return () => {
        }
    }, [])


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
