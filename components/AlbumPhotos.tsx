import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../redux/store';
import {getAlbumPhotosTC} from '../redux/photos-reducer';
import {PhotosResponseType} from '../api/photos-api';
import {globalStyles} from '../styles/global';
import {withNavigation} from 'react-navigation';


const AlbumPhotos = (props: PropsType) => {
    const photos = useSelector<AppRootStateType, { [key: number]: PhotosResponseType[] }>(store => store.photos.albumPhotos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlbumPhotosTC(props.albumId))
    }, [])

    return (
        <View>
            <FlatList data={photos[props.albumId]}
                      keyExtractor={item => item.id.toString()}
                      horizontal
                      renderItem={({item}) => (
                          <View>
                              <TouchableOpacity
                                  onPress={() => props.pressHandler(item.title, item.url)}>
                                  <Image style={[globalStyles.img, styles.img]} source={{uri: item.thumbnailUrl}}/>
                              </TouchableOpacity>
                          </View>
                      )}/>
        </View>
    );
}

export default withNavigation(AlbumPhotos)

// STYLES
const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        marginRight: 10
    }
})

// TYPES
type PropsType = {
    albumId: number,
    pressHandler: (title: string, url: string) => void
}
