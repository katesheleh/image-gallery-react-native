import React, {useEffect} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {getAlbumPhotosTC} from "../redux/photos-reducer";
import {PhotosResponseType} from "../api/photos-api";


export default function AlbumPhotos(props: PropsType) {
    const photos = useSelector<AppRootStateType, { [key: number]: PhotosResponseType[] }>(store => store.photos.albumPhotos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlbumPhotosTC(props.albumId))
    }, [])

    return (
        <View style={styles.container}>
            <FlatList data={photos[props.albumId]}
                      keyExtractor={item => item.id.toString()}
                      horizontal
                      renderItem={({item}) => (
                          <View style={styles.list}>
                              <Text>{item.id} - id</Text>
                              <Text>{item.albumId} - album id</Text>
                              <Image style={styles.img} source={{uri: item.thumbnailUrl}}/>
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
    },
    img: {
        width: 100,
        height: 100,
    }
});


type PropsType = {
    albumId: number,
    navigation: any
}
