import React from 'react'
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import {globalStyles} from '../../styles/global'
import ActionButton from '../common/ActionButton'


const PhotoDetailsScreen = (props: PropsType) => {
    const pressHandler = () => props.navigation.goBack()

    return (
        <View style={globalStyles.container}>
            <ActionButton onPress={pressHandler} text='Back' icon='undo'/>
            <View style={globalStyles.item}>
                <Text style={globalStyles.titleText}>{props.navigation.getParam('title')}</Text>
                <Image style={[globalStyles.img, styles.img]} source={{uri: props.navigation.getParam('url')}}/>
            </View>
        </View>
    )
}


export default React.memo(PhotoDetailsScreen)

// STYLES
export const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    img: {
        flex: 1,
        width: windowWidth - 100, // 100% width (100 => paddings sum in the row)
        height: windowWidth - 100,
    },
})

// TYPES
type PropsType = {
    navigation: any
}
