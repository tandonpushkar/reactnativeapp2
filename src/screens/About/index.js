import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text, ListViewComponent, ScrollView, TouchableOpacity, Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ButtonCommon from '../../components/ButtonCommon'
import HeaderBack from '../../components/HeaderBack'
import { clearLoginData } from '../../redux/actions/login'
import { colors } from '../../styles/colors'
import { fontToDp } from '../../utils/Responsive'
import { ScreenNames } from '../../utils/ScreenNames'


const About = ({ navigation }) => {

    return (
        <View>
            <HeaderBack title={ScreenNames.ABOUT} />
            <View style={{ justifyContent: "space-evenly", height: '100%' }}>


                <Text style={{ textAlign: 'center', fontSize: fontToDp(20), color: colors.primaryBlue }}>About this app</Text>

                <ScrollView>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('https://tandonpushkar.netlify.app/')
                        }}>
                            <Text style={{ color: colors.darkGreen, fontSize: fontToDp(20) }}>Click to see my portfolio</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>

                        <Text style={{ flex: 1, paddingLeft: 5, fontSize: fontToDp(16), color: colors.primaryBlue }}>Airline customer api : {'\n'} 'https://api.instantwebtools.net/v1/passenger?page=0&size=10'</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>

                        <Text style={{ flex: 1, paddingLeft: 5, fontSize: fontToDp(16), color: colors.primaryBlue }}>Made with 💖 using react native</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>

                        <Text style={{ flex: 1, paddingLeft: 5, fontSize: fontToDp(16), color: colors.primaryBlue }}>V 1.0</Text>
                    </View>
                </ScrollView>


            </View>

        </View>
    )
}

export default About
