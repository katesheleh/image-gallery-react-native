import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {globalStyles} from '../../styles/global'

import ExternalLink from '../common/ExternalLink'

const AboutScreen = () => {
    return (
        <View style={globalStyles.container}>
            <View style={styles.contentWrap}>
                <Text style={globalStyles.contentText}>made by</Text>
                <Text style={globalStyles.titleText}>Katia Sheleh</Text>

                <View style={styles.contacts}>
                    <Text style={[globalStyles.contentText, styles.subtitle]}>let's keep in touch</Text>
                    <ExternalLink link='mailto:kate.sheleh@gmail.com' text='kate.sheleh@gmail.com'/>
                    <View style={styles.linksList}>
                        <ExternalLink link='https://www.linkedin.com/in/katesheleh/' icon='linkedin-square'/>
                        <ExternalLink link='https://github.com/katesheleh' icon='github'/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default React.memo(AboutScreen)


// STYLES
const styles = StyleSheet.create({
    contentWrap: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    linksList: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contacts: {
        marginTop: 30,
        textAlign: 'center',
    },
    subtitle: {
        marginBottom: 5,
    },
})

