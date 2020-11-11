import {Dispatch} from 'redux'
import {AlbumResponseType, albumsApi} from '../api/albums-api'


let initialState: InitialStateType = {} as InitialStateType

export const albumsReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'LOAD_ALBUMS':
            return {...state, userAlbums: action.userAlbums}
        default:
            return state
    }
}

// Action creators
export const loadAlbumsAC = (userAlbums: AlbumResponseType[]) => ({type: 'LOAD_ALBUMS', userAlbums} as const)


// THUNK
export const getUserAlbumsTC = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    albumsApi.userAlbums(userId)
        .then(res => {
            dispatch(loadAlbumsAC(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

// TYPES
export type InitialStateType = {
    userAlbums: AlbumResponseType[]
}


export type ActionsType = LoadAlbumsACType

export type LoadAlbumsACType = ReturnType<typeof loadAlbumsAC>
