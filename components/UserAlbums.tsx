import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAlbumsTC} from '../redux/albums-reducer';
import {AppRootStateType} from '../redux/store';
import {AlbumResponseType} from '../api/albums-api';
import AlbumPhotos from './AlbumPhotos';
import {globalStyles} from '../styles/global';
import ActionButton from './ActionButton';

export default function UserAlbums(props: PropsType) {
    const albums = useSelector<AppRootStateType, AlbumResponseType[]>(store => store.albums.userAlbums)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserAlbumsTC(props.id))
    }, [])


    return (
        <FlatList
            data={albums}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (

                <View style={globalStyles.item}>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    <ActionButton onPress={() => props.pressHandler(item.userId, item.id, item.title)}
                                  text='Show Details'/>
                    <AlbumPhotos albumId={item.id}/>
                </View>

            )}/>
    )
}


// TYPES
type PropsType = {
    id: number,
    pressHandler: (userId: number, id: number, title: string) => void
}
