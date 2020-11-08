import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getUserAlbumsTC} from "../redux/albums-reducer";
import {AppRootStateType} from "../redux/store";
import {AlbumResponseType} from "../api/albums-api";
import AlbumPhotos from "./AlbumPhotos";

export default function UserAlbums(props: PropsType) {
    const albums = useSelector<AppRootStateType, AlbumResponseType[]>(store => store.albums.userAlbums)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserAlbumsTC(props.id))
    }, [])

    return (
        <View style={styles.container}>
            <FlatList data={albums} keyExtractor={item => item.id.toString()} renderItem={({item}) => (
                <View style={styles.list}>
                    <Text>id:{item.id} - {item.title}</Text>

                    <TouchableOpacity onPress={() => props.pressHandler(item.userId, item.id, item.title)}>
                        <Text>Details</Text>
                    </TouchableOpacity>

                    <AlbumPhotos albumId={item.id}/>
                </View>
            )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    list: {
        padding: 20,
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    }
});


type PropsType = {
    id: number,
    pressHandler: (userId: number, id: number, title: string) => void
}
