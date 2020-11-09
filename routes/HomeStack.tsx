import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation'
import AlbumDetailsScreen from "../components/screens/AlbumDetailsScreen";
import AlbumsScreen from "../components/screens/AlbumsScreen";
import PhotoDetailsScreen from "../components/screens/PhotoDetailsScreen";


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
        headerStyle: {backgroundColor: '#256738', height: 60}
    }
})

export default createAppContainer(HomeStack)