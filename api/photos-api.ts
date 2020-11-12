import {instance} from './api'

export const photosApi = {
    allPhotos() {
        return instance.get<PhotosResponseType[]>('/photos')
    },
    albumPhotos(albumId: number) {
        return instance.get<PhotosResponseType[]>(`/albums/${albumId.toString()}/photos`)
    }
}

export type PhotosResponseType = {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
