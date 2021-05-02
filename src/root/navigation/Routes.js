import * as React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screens/Home';
import Notifications from '../../screens/Notifications';
import About from '../../screens/About';
import Features from '../../screens/Features';

import { ScreenNames } from '../../utils/ScreenNames';
import { Image, Vibration } from 'react-native';
import { screenOption, tabBarOption } from './constants/options';
import Images from '../../assets/Images/Images';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


export const DrawerStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={TabStack} />
            <Drawer.Screen name="Notifications" component={Notifications} />
            <Drawer.Screen name="Features" component={Features} />
        </Drawer.Navigator>
    );
};

const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === ScreenNames.HOME) {
                        iconName = Images.home;
                        Vibration.vibrate(50)
                    } else if (route.name === ScreenNames.ABOUT) {
                        iconName = Images.contacts;
                    }
                    return <Image source={iconName}
                        style={{ height: size, width: size, resizeMode: 'contain', tintColor: `${color}` }}
                    />;
                },
            })}
            backBehavior='none'
            tabBarOptions={tabBarOption}
        >
            <Tab.Screen name={ScreenNames.HOME} component={Home} />
            <Tab.Screen name={ScreenNames.ABOUT} component={About} />
        </Tab.Navigator>
    );
};

// export const App = () => {
//     return (
//         <Stack.Navigator
//             headerMode='none'
//             initialRouteName={ScreenNames.HOME}
//             screenOptions={screenOption}
//         >
//             <Stack.Screen name={ScreenNames.HOME} component={TabStack} />
//         </Stack.Navigator>
//     );
// }