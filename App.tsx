import React, {useState} from 'react'
import {store} from './redux/store'
import {Provider} from 'react-redux'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import HomeStack from './routes/HomeStack'


const getFonts = () => Font.loadAsync({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
})

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false)

    if (fontLoaded) {
        return (
            <Provider store={store}>
                <HomeStack/>
            </Provider>
        )

    } else {
        return <AppLoading
            startAsync={getFonts}
            onFinish={() => setFontLoaded(true)}/>
    }
}


