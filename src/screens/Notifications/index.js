import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import { fontToDp, heightToDp, widthToDp } from '../../utils/Responsive';
import { ScreenNames } from '../../utils/ScreenNames';
import { colors } from '../../styles/colors';
import ButtonCommon from '../../components/ButtonCommon';
import { handleCancel, handleScheduledNotification, showNotification } from './notification.android';
import PushNotification from 'react-native-push-notification';


const Notifications = () => {

    return (
        <View>
            <HeaderBack title={ScreenNames.NOTIFICATIONS} />
            <View style={styles.TopContainer}>
                <ButtonCommon
                    onPress={() => showNotification('Defi 11', 'Bringing Decentralization to Fantasy Sports')}
                    textStyle={{
                        fontSize: fontToDp(14),
                        color: 'black',
                        textAlign: 'center'
                    }}
                    text='Click me to get Notification' />

                <ButtonCommon
                    onPress={() => handleScheduledNotification('Defi 11', 'Fantasy Sports , Betting , NFT Gaming , Liquidity Pool , Prediction Contracts , Staking , Swapping , Rewards & Incentives')}
                    textStyle={{
                        fontSize: fontToDp(14),
                        color: 'black',
                        textAlign: 'center'
                    }}
                    text='Click me to get Notification after 5 seconds' />

                <ButtonCommon
                    onPress={handleCancel}
                    textStyle={{
                        fontSize: fontToDp(14),
                        color: 'black'
                    }}
                    text='Click me to cancel all Notifications' />
            </View>

        </View >
    )
}

export default Notifications

const styles = StyleSheet.create({

    inputView: {
        //backgroundColor: 'rgba(0,0,0,0)',
    },
    input: {
        textAlign: 'center',
        // fontFamily: PT_SANS_NARROW_BOLD,
        color: colors.primaryBlue,
        marginHorizontal: '5%',
        fontSize: fontToDp(18),
        borderBottomColor: '#BFC7D8',
        borderBottomWidth: 1.5,
    },

    logo: {
        height: heightToDp('10%'),
        width: 'auto',
        overflow: 'hidden',
        resizeMode: 'contain',
        marginTop: '10%'
    },

    heading: {
        // fontFamily: PT_SANS_BOLD,
        fontSize: widthToDp('7%'),
        lineHeight: 25,
        color: '#202B46',
        textAlign: 'center'
    },




    TopContainer: {
        backgroundColor: colors.background,
        height: '100%',
        justifyContent: 'space-evenly'
    },

})
