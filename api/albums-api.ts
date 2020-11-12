import {instance} from './api'


export const albumsApi = {
    allAlbums() {
        return instance.get<any>('/albums')
    },
    userAlbums(userId: number) {
        return instance.get<AlbumResponseType[]>(`/users/${userId.toString()}/albums`)
    }
}


export type AlbumResponseType = {
    userId: number
    id: number
    title: string
}


