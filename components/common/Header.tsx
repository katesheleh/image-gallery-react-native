import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const Header = (props: PropsType) => {
    const openMenu = () => props.navigation.openDrawer()

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' style={styles.icon} onPress={openMenu}/>
            <View>
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
        </View>
    )
}

export default React.memo(Header)

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
