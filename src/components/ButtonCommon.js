import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../styles/colors';
import { ifValid } from '../utils/helper';
import { heightToDp, widthToDp } from '../utils/Responsive';


const ButtonCommon = ({ onPress, text = '', style, textStyle, disabled = false, loading }) => {
    if (ifValid(loading)) {
        disabled = loading === true ? true : false;

    }
    return <View style={{ backgroundColor: colors.background }}>
        <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, style]}>
            {loading ?
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color={colors.white} style={{ alignSelf: 'center' }} size={'small'} />
                </View> :
                <Text style={[styles.textStyle, textStyle]}>{text.toUpperCase()}</Text>
            }
        </TouchableOpacity>
    </View>;
};
export default ButtonCommon;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: colors.primaryGreen,
        alignItems: 'center',
        margin: widthToDp(4.3),
        height: heightToDp(6),
        elevation: 5,
    },
    textStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
});
