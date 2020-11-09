import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserTC} from '../../redux/users-reducer';
import {UsersResponseType} from '../../api/users-api';
import {AppRootStateType} from '../../redux/store';
import UserAlbums from '../UserAlbums';
import {globalStyles} from '../../styles/global';


const AlbumsScreen = ({navigation}: any) => {
    const currentUser = useSelector<AppRootStateType, UsersResponseType>(store => store.users.currentUser)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserTC(1))
    }, [])

    // go to Single Album screen
    const pressHandler = (userId: number, id: number, title: string) => {
        navigation.navigate('AlbumDetails', {userId, id, title})
    }

    // go to Single Photo screen
    const photosPressHandler = (title: string, url: string) => {
        navigation.navigate('PhotoDetails', {title, url})
    }

    return (
        <View style={globalStyles.container}>
            {currentUser && <UserAlbums id={currentUser.id} pressHandler={pressHandler} photosPressHandler={photosPressHandler}/>}
        </View>
    )
}

export default AlbumsScreen