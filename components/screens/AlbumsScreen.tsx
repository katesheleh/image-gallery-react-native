import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserTC} from '../../redux/users-reducer';
import {UsersResponseType} from '../../api/users-api';
import {AppRootStateType} from '../../redux/store';
import UserAlbums from '../UserAlbums';
import {globalStyles} from '../../styles/global';


export default function AlbumsScreen({navigation}: any) {
    const currentUser = useSelector<AppRootStateType, UsersResponseType>(store => store.users.currentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserTC(1))
    }, [])

    const pressHandler = (userId: number, id: number, title: string) => {
        navigation.navigate('AlbumDetails', {userId, id, title})
    }
    return (
        <View style={globalStyles.container}>
            {currentUser && <UserAlbums id={currentUser.id} pressHandler={pressHandler}/>}
        </View>
    )
}