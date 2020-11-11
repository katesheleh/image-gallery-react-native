import React, {useEffect} from 'react'
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../redux/store'
import {getAlbumPhotosTC} from '../../redux/photos-reducer'
import {PhotosResponseType} from '../../api/photos-api'
import {globalStyles} from '../../styles/global'
import ActionButton from '../common/ActionButton'


const AlbumDetailsScreen = (props: PropsType) => {
    const albumId = props.navigation.getParam('id')
    const photos = useSelector<AppRootStateType, PhotosResponseType[]>(store => store.photos.albumPhotos[albumId])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlbumPhotosTC(albumId))
    }, [])

    // go to Home Screen (Albums Screen)
    const pressHandler = () => props.navigation.goBack()

    return (
        <View style={globalStyles.container}>

            <Text style={globalStyles.titleText}>{props.navigation.getParam('title')}</Text>

            <ActionButton onPress={pressHandler} text='Back' icon='undo'/>

            <FlatList data={photos}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({item}) => (
                          <View style={[globalStyles.item, styles.itemDetails]}>
                              <TouchableOpacity
                                  onPress={() => props.navigation.navigate('PhotoDetails', {
                                      title: item.title,
                                      url: item.url,
                                  })}>
                                  <Image style={[globalStyles.img, styles.img]} source={{uri: item.thumbnailUrl}}/>
                              </TouchableOpacity>
                              <Text style={[globalStyles.contentText, styles.content]}>{item.title}</Text>
                          </View>
                      )}/>
        </View>
    )
}


export default React.memo(AlbumDetailsScreen)

// STYLES
export const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    itemDetails: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: (windowWidth - 100) / 2, // 50% width (100 => paddings sum in the row)
        height: (windowWidth - 100) / 2,
    },
    content: {
        width: (windowWidth - 100) / 2, // 50% width (100 => paddings sum in the row)
        paddingLeft: 15,
    },
})

// TYPES
type PropsType = {
    navigation: any
    pressHandler: () => void
}