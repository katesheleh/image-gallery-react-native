import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import AlbumDetailsScreen from "../components/screens/AlbumDetailsScreen";
import AlbumsScreen from "../components/screens/AlbumsScreen";
import PhotoDetailsScreen from "../components/screens/PhotoDetailsScreen";
import Header from "../components/common/Header";


const screens = {
    Home: {
        screen: AlbumsScreen,
        navigationOptions: ({navigation}: any) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='All Albums'/>
            }
        },
    },
    AlbumDetails: {
        screen: AlbumDetailsScreen,
        navigationOptions: {
            title: 'Album Details',
        }
    },
    PhotoDetails: {
        screen: PhotoDetailsScreen,
        navigationOptions: {
            title: 'Single Photo Details',
        }
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {backgroundColor: '#256738', height: 70}
    }
})

export default HomeStack