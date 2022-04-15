import { createElement, ReactElement, useEffect, useMemo } from "react";
import { AmapProps } from "../typings/AmapProps";
import { AmapStyle } from "./ui/Styles";
import { MapView, MapType, Polyline, LatLng } from "react-native-amap3d";
import { AMapSdk } from "react-native-amap3d";
import { Platform } from 'react-native';
import { ValueStatus } from "mendix";

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
    const points = useMemo<LatLng[]>(() => {
        if (props.points.status == ValueStatus.Available) {
            return props.points.items!.map(obj => ({ longitude: props.longitude.get(obj).value!.toNumber(), latitude: props.latitude.get(obj).value!.toNumber() }))
        } else {
            return [];
        }
    }, [props.points])

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
            mapType={MapType.Standard}
            initialCameraPosition={{
                target: {
                    latitude: 39.91095,
                    longitude: 116.37296,
                },
                zoom: 14,
            }}
        >
            <Polyline color={'#3366FF'} width={8} points={points}></Polyline>
        </MapView>
    );
}
