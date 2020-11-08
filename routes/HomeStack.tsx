import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import AlbumDetailsScreen from "../components/AlbumDetailsScreen";
import AlbumsScreen from "../components/AlbumsScreen";


const screens = {
    Home: {
        screen: AlbumsScreen,
        navigationOptions: {
            title: 'All Albums',
        }
    },
    AlbumDetails: {
        screen: AlbumDetailsScreen,
        navigationOptions: {
            title: 'Album Details',
        }
    }
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: '#eee', height: 60}
    }
})

export default createAppContainer(HomeStack)