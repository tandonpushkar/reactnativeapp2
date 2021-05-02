import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { App, DrawerStack } from './Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { clearLoginData, setLoginData } from '../../redux/actions/login';
import { ActivityIndicator, View } from 'react-native';


const Navigator = () => {

    // const loginToken = useSelector(state => state.login.userToken);
    // const dispatch = useDispatch();
    // const [isAuth, setisAuth] = useState(null);

    // useEffect(() => {
    //     AsyncStorage.getItem('userDetails')
    //         .then((item) => {
    //             if (item) {
    //                 console.log("item", JSON.parse(item))
    //                 dispatch(setLoginData(JSON.parse(item)));
    //             } else {
    //                 dispatch(clearLoginData());

    //             }
    //         });
    // }, [loginToken]);

    // if (isAuth == null) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" />
    //         </View>
    //     );
    // }
    // else {
    return (
        <NavigationContainer>
            <DrawerStack />
            {/* <App /> */}
        </NavigationContainer>

    );
    // }
}
export default Navigator;
