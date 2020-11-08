import React from 'react';
import {store} from "./redux/store";
import {Provider} from 'react-redux';
import HomeStack from "./routes/HomeStack";


export default function App() {
    return (
        <Provider store={store}>
            <HomeStack/>
        </Provider>
    );
}


