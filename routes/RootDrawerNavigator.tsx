import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";


const RootDrawerNavigator = createDrawerNavigator({
        Home: {
            screen: HomeStack,

        },
        About: {
            screen: AboutStack
        }
    },
    {
        drawerBackgroundColor: '#f5fcff',
        contentOptions: {
            activeTintColor: '#256738',
            activeBackgroundColor: 'rgba(37, 103, 56, 0.1)',
            labelStyle: {
                fontSize: 20,
                fontFamily: 'MontserratMedium'
            }
        },

    })

export default createAppContainer(RootDrawerNavigator)