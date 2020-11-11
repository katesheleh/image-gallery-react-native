import {Dispatch} from 'redux'
import {photosApi, PhotosResponseType} from '../api/photos-api'


let initialState: InitialStateType = {
    albumPhotos: {} as { [key: number]: PhotosResponseType[] },
} as InitialStateType

export const photosReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'LOAD_PHOTOS':
            return {
                ...state, albumPhotos: {
                    ...state.albumPhotos,
                    [action.albumId]: action.albumPhotos,
                },
            }
        default:
            return state
    }
}

// Action creators
export const loadAlbumPhotosAC = (albumPhotos: PhotosResponseType[], albumId: number) => ({
    type: 'LOAD_PHOTOS',
    albumPhotos,
    albumId,
} as const)

// THUNK
export const getAlbumPhotosTC = (albumId: number) => (dispatch: Dispatch<ActionsType>) => {
    photosApi.albumPhotos(albumId)
        .then(res => {
            dispatch(loadAlbumPhotosAC(res.data, albumId))
        })
        .catch((error) => {
            console.log(error)
        })
}

// TYPES
export type InitialStateType = {
    albumPhotos: { [key: number]: PhotosResponseType[] }
}

type ActionsType = LoadAlbumPhotosACType

type LoadAlbumPhotosACType = ReturnType<typeof loadAlbumPhotosAC>
