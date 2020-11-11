import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import Header from "../components/common/Header";
import AboutScreen from "../components/screens/AboutScreen";


const screens = {
    About: {
        screen: AboutScreen,
        navigationOptions: ({navigation}: any) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About'/>
            }
        },
    },
}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#256738', height: 70}
    }
})

export default AboutStack