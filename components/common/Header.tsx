import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const Header = (props: PropsType) => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
        </View>
    )
}

export default Header

// STYLES
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#256738',
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'MontserratMedium',
        color: '#fff',
        letterSpacing: 1,
    },
    icon: {
        fontSize: 28,
        position: 'absolute',
        left: 10,
        color: '#fff',
    },
})

// TYPES
type PropsType = {
    navigation: any,
    title: string
}
