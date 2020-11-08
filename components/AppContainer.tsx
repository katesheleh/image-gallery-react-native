import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AlbumsScreen from "./AlbumsScreen";


export default function AppContainer() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Header</Text>
            </View>
            <View style={styles.body}>
                <AlbumsScreen/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        width: '100%',
        backgroundColor: 'pink',
        padding: 20
    },
    headerText: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 30,
        textAlign: "center"
    },
    body: {
        backgroundColor: '#f1f1f1',
        width: '100%',
        padding: 20
    },
});