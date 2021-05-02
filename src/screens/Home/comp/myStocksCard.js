import React, { Component, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import Images from '../../../assets/Images/Images'
import { fontToDp } from '../../../utils/Responsive';


const MyStocksCard = ({ data }) => {

    useEffect(() => {
        if (Array.isArray(data)) {
            console.log("()", data);
        }
    }, [data])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', padding: 10, backgroundColor: 'white', marginBottom: 5 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 40, width: 60, resizeMode: 'contain' }}
                        source={{ uri: Array.isArray(data.airline) ? data.airline[0].logo : data.airline.logo }} />
                </View>
                <View style={{ justifyContent: 'space-between', marginHorizontal: 15 }}>
                    <Text style={{ color: '#202B46', fontSize: fontToDp(14) }}>{data.name}</Text>
                    <Text style={{ color: '#505C74', fontSize: fontToDp(12) }} >{'Trips : ' + data.trips}</Text>


                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 120, height: 20, backgroundColor: '#E5ECF9', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#505C74', fontSize: fontToDp(10) }}>{Array.isArray(data.airline) ? data.airline[0].name : data.airline.name}</Text>
                        </View>

                        <View style={{ marginLeft: '20%' }}>
                            <Text style={{ color: 'red', textAlign: 'center' }}>{Array.isArray(data.airline) ? data.airline[0].country : data.airline.country}</Text>
                        </View>

                    </View>
                </View>

            </View>
        </View>
    );
}


export default MyStocksCard;
