import React, {useEffect} from 'react';
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {getAlbumPhotosTC} from "../redux/photos-reducer";
import {PhotosResponseType} from "../api/photos-api";


export default function PhotoDetailsScreen(props: PropsType) {

    const pressHandler = () => {
        props.navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Button title={'back'} onPress={pressHandler}/>
            <Image style={styles.img} source={{uri: props.navigation.getParam('url')}}/>
            <Text>title: {props.navigation.getParam('title')}</Text>
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
        width: 300,
        height: 300
    }
});


type PropsType = {
    navigation: any
}
