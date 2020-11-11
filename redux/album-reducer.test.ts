import {albumsReducer, InitialStateType, loadAlbumsAC} from './albums-reducer'
import {AlbumResponseType} from '../api/albums-api'


let initState: InitialStateType
let userAlbums: AlbumResponseType[]

beforeEach(() => {

    initState = {
        userAlbums: [
            {
                userId: 3,
                id: 21,
                title: 'repudiandae voluptatem optio est consequatur rem in temporibus et',
            },
        ],
    }
})

test('All user albums should be loaded', () => {
    let newUserAlbum = [
        {
            userId: 3,
            id: 25,
            title: 'vero maxime id possimus sunt neque et consequatur',
        },
        {
            userId: 3,
            id: 26,
            title: 'quibusdam saepe ipsa vel harum',
        },
    ]

    const action = loadAlbumsAC(newUserAlbum)
    const endState = albumsReducer(initState, action)

    expect(endState.userAlbums.length).toBe(3)
    expect(endState.userAlbums[3].title).toBe('quibusdam saepe ipsa vel harum')
})