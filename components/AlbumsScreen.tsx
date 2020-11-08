import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getUserTC} from "../redux/users-reducer";
import {UsersResponseType} from "../api/users-api";
import {AppRootStateType} from "../redux/store";
import UserAlbums from "./UserAlbums";


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
        <View style={styles.container}>
            {currentUser && <UserAlbums id={currentUser.id} pressHandler={pressHandler}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    }
});

