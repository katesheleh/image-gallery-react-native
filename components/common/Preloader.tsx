import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import {globalStyles} from '../../styles/global'

const Preloader = () => {
    return (
        <View style={globalStyles.container}>
            <ActivityIndicator size="large" color="#256738"/>
        </View>
    )
}

export default React.memo(Preloader)

// STYLES
const styles = StyleSheet.create({})
