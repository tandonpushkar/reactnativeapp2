import { Image, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import React from 'react';
import { fontToDp, heightToDp, width, widthToDp } from '../utils/Responsive';
import Images from '../assets/Images/Images';
import { useNavigation } from '@react-navigation/native';

const HeaderBack = ({ style, title = 'Title' }) => {
    const navigation = useNavigation();

    return <View style={styles.headerContainer}>

        <TouchableOpacity
            style={{ position: 'absolute', left: 0, padding: 15 }}
            onPress={() => {
                Vibration.vibrate(80)
                navigation.openDrawer()
            }}>
            <Image style={{ height: fontToDp(16), width: fontToDp(16), tintColor: 'white' }} source={Images.menu} resizeMode='contain' />
        </TouchableOpacity>

        <Text style={styles.headerStyle}>{title.toUpperCase()}</Text>
    </View>;
};
export default HeaderBack;


const styles = StyleSheet.create({
    headerContainer: {

        paddingLeft: widthToDp(2),
        backgroundColor: '#202B46',
        height: heightToDp('7.0'),
        justifyContent: "center",
        alignItems: "center"

    },
    headerStyle: {
        color: '#AFFF00'

    },
});
