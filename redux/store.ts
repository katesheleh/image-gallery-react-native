import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {usersReducer} from './users-reducer'
import {albumsReducer} from './albums-reducer'
import {photosReducer} from './photos-reducer'


const rootReducer = combineReducers({
    users: usersReducer,
    albums: albumsReducer,
    photos: photosReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store