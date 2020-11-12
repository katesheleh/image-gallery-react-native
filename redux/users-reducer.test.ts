import {InitialStateType, loadCurrentUserAC, loadUsersAC, usersReducer} from './users-reducer'
import {UsersResponseType} from '../api/users-api'

let user: UsersResponseType
let users: UsersResponseType[]
let initState: InitialStateType
let newUser: UsersResponseType

beforeEach(() => {
    user = {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    }

    users = [
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618',
                },
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains',
            },
        },
    ]

    newUser = {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342',
            },
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
        },
    }

    initState = {
        currentUser: user,
        usersData: users,
    }
})


test('All users should be loaded', () => {
    const newUsers = [newUser]

    const action = loadUsersAC(newUsers)
    const endState = usersReducer(initState, action)

    expect(endState.currentUser.name).toBe('Leanne Graham')
    expect(endState.usersData.length).toBe(2)
    expect(endState.usersData[0].id).toBe(2)
    expect(endState.usersData[1].username).toBe('Kamren')
})

test('Current single User should be loaded', () => {

    const action = loadCurrentUserAC(newUser)
    const endState = usersReducer(initState, action)

    expect(endState.currentUser.id).toBe(5)
    expect(endState.currentUser.address.street).toBe('Skiles Walks')
})



