import React, {useEffect} from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {getUserAlbumsTC} from '../redux/albums-reducer'
import {AppRootStateType} from '../redux/store'
import {AlbumResponseType} from '../api/albums-api'
import AlbumPhotos from './AlbumPhotos'
import {globalStyles} from '../styles/global'
import ActionButton from './common/ActionButton'

const UserAlbums = (props: PropsType) => {
    const albums = useSelector<AppRootStateType, AlbumResponseType[]>(store => store.albums.userAlbums)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserAlbumsTC(props.id))
    }, [])

    return (
        <View style={styles.innerContainer}>
            <FlatList
                data={albums}
                keyExtractor={item => item.id.toString()}
                onScroll={() => console.log('scroll')}
                renderItem={({item}) => (
                    <View style={globalStyles.item}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                        <ActionButton onPress={() => props.pressHandler(item.userId, item.id, item.title)}
                                      text='Show Details' icon='palette'/>
                        <AlbumPhotos albumId={item.id} pressHandler={props.photosPressHandler}/>
                    </View>

                )}/>
        </View>
    )
}

export default React.memo(UserAlbums)


// STYLES
const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
    },
})

// TYPES
type PropsType = {
    id: number,
    pressHandler: (userId: number, id: number, title: string) => void,
    photosPressHandler: (title: string, url: string) => void
}
