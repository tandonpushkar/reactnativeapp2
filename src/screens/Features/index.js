import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text, ListViewComponent, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ButtonCommon from '../../components/ButtonCommon'
import HeaderBack from '../../components/HeaderBack'
import { clearLoginData } from '../../redux/actions/login'
import { colors } from '../../styles/colors'
import { fontToDp } from '../../utils/Responsive'
import { ScreenNames } from '../../utils/ScreenNames'


const Features = ({ navigation }) => {

    return (
        <View>
            <HeaderBack title={ScreenNames.FEATURES} />
            <View style={{ justifyContent: "space-evenly", height: '100%' }}>


                <Text style={{ textAlign: 'center', fontSize: fontToDp(20), color: colors.primaryBlue }}>Defi11 Assignment</Text>

                <ScrollView>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text>{'\u2022'}</Text>
                        <Text style={{ flex: 1, paddingLeft: 5, fontSize: fontToDp(16), color: colors.primaryBlue }}>Nest a bottom tab navigation inside a drawer navigator</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text>{'\u2022'}</Text>
                        <Text style={{ flex: 1, paddingLeft: 5, fontSize: fontToDp(16), color: colors.primaryBlue }}>Firebase with crashlytics and notification</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text>{'\u2022'}</Text>
                        <Text style={{ flex: 1, paddingLeft: 5, fontSize: fontToDp(16), color: colors.primaryBlue }}>Infinite Scrolling list which maintains previous data.</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text>{'\u2022'}</Text>
                        <Text style={{ flex: 1, paddingLeft: 5, fontSize: fontToDp(16), color: colors.primaryBlue }}>refresh on pulling screen down</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text>{'\u2022'}</Text>
                        <Text style={{ flex: 1, paddingLeft: 5, fontSize: fontToDp(16), color: colors.primaryBlue }}>redux-persist storage for saving the list in local storage of app</Text>
                    </View>
                </ScrollView>


            </View>

        </View>
    )
}

export default Features
