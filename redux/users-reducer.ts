import {Dispatch} from 'redux'
import {usersApi, UsersResponseType} from '../api/users-api'


let initialState: InitialStateType = {} as InitialStateType

export const usersReducer = (state: InitialStateType = initialState, action: any) => { //ActionsType
    switch (action.type) {
        case 'LOAD_USERS':
            return {...state, usersData: [...state.usersData, ...action.usersData]}
        case 'LOAD_CURRENT_USER':
            return {...state, currentUser: action.currentUser}
        default:
            return state
    }
}

// Action creators
export const loadUsersAC = (usersData: UsersResponseType[]) => ({type: 'LOAD_USERS', usersData} as const)
export const loadCurrentUserAC = (currentUser: UsersResponseType) => ({type: 'LOAD_CURRENT_USER', currentUser} as const)

// THUNK
export const getUsersTC = () => (dispatch: Dispatch<ActionsType>) => {
    usersApi.usersList()
        .then(res => {
            dispatch(loadUsersAC(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getUserTC = (userId: number) => (dispatch: Dispatch<ActionsType>) => {
    usersApi.user(userId)
        .then(res => {
            dispatch(loadCurrentUserAC(res.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

// TYPES
export type InitialStateType = {
    usersData: UsersResponseType[],
    currentUser: UsersResponseType
}

export type ActionsType = LoadUsersACType | LoadCurrentUserACType

export type LoadUsersACType = ReturnType<typeof loadUsersAC>
export type LoadCurrentUserACType = ReturnType<typeof loadCurrentUserAC>
