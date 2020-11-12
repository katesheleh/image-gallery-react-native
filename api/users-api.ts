import {instance} from './api'

export const usersApi = {
    usersList() {
        return instance.get<UsersResponseType[]>('/users')
    },
    user(userId: number) {
        return instance.get<UsersResponseType>(`/users/${userId.toString()}`)
    }
}

export type UsersResponseType = {
    address: {
        city: string
        street: string
        suite: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    company: {
        bs: string
        catchPhrase: string
        name: string
    }
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}
