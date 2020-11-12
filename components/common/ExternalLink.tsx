import React from 'react'
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {AntDesign} from '@expo/vector-icons'

const ExternalLink = (props: PropsType) => {
    return (
        <View>
            <TouchableOpacity onPress={() => Linking.openURL(props.link)}>
                {props.text && <Text style={styles.text}>{props.text}</Text>}
                {props.icon && <AntDesign name={props.icon} style={styles.icon}/>}
            </TouchableOpacity>
        </View>
    )
}

export default ExternalLink

// STYLES
const styles = StyleSheet.create({
    text: {
        color: '#256738',
        fontFamily: 'MontserratBold',
        fontSize: 14,
    },
    icon: {
        color: '#256738',
        fontSize: 24,
        padding: 7,
    },
})

// TYPES
type PropsType = {
    text?: string
    link: string
    icon?: string
}




