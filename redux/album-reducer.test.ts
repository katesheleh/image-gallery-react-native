import {albumsReducer, InitialStateType, loadAlbumsAC} from './albums-reducer'

let initState: InitialStateType

beforeEach(() => {
    initState = {
        userAlbums: [],
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

    expect(endState.userAlbums.length).toBe(2)
    expect(endState.userAlbums[1].title).toBe('quibusdam saepe ipsa vel harum')
})