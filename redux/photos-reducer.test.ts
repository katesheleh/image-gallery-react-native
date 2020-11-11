import {InitialStateType, loadAlbumPhotosAC, photosReducer} from './photos-reducer'


let initState: InitialStateType

beforeEach(() => {
    initState = {
        albumPhotos: {
            '2': [
                {
                    albumId: 2,
                    id: 85,
                    title: 'ullam delectus architecto sint error',
                    url: 'https://via.placeholder.com/600/eb7e7f',
                    thumbnailUrl: 'https://via.placeholder.com/150/eb7e7f',
                },
            ],
        },
    }
})

test('All photos sorted by Album should be loaded', () => {
    let photos = [
        {
            albumId: 1,
            id: 1,
            title: 'accusamus beatae ad facilis cum similique qui sunt',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
    ]
    const action = loadAlbumPhotosAC(photos, 1)
    const endState = photosReducer(initState, action)

    expect(Object.keys(endState.albumPhotos).length).toBe(2)
    expect(endState.albumPhotos[1].length).toBe(1)
    expect(endState.albumPhotos[2][0].thumbnailUrl).toBe('https://via.placeholder.com/150/eb7e7f')
})