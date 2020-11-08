import React, {useEffect} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {getAlbumPhotosTC} from "../redux/photos-reducer";
import {PhotosResponseType} from "../api/photos-api";


export default function AlbumDetailsScreen(props: PropsType) {
    const albumId = props.navigation.getParam('id');
    const photos = useSelector<AppRootStateType, PhotosResponseType[]>(store => store.photos.albumPhotos[albumId])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAlbumPhotosTC(albumId))
    }, [])

    const pressHandler = () => {
        props.navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Button title={'back'} onPress={pressHandler}/>
            <Text>id: {props.navigation.getParam('id')}</Text>
            <Text>Album Title: {props.navigation.getParam('title')}</Text>
            <View style={styles.container}>
                <FlatList data={photos}
                          keyExtractor={item => item.id.toString()}
                          renderItem={({item}) => (
                              <View style={styles.list}>
                                  <Image style={styles.img} source={{uri: item.thumbnailUrl}}/>
                                  <Text>{item.title}</Text>
                              </View>
                          )}/>
            </View>
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
        width: 70,
        height: 70
    }
});


type PropsType = {
    navigation: any
}
