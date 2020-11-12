import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#f5fcff'
    },
    item: {
        borderColor: 'rgba(37, 103, 56, 0.3)',
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 15,
        padding: 20,
        borderRadius: 7
    },
    titleText: {
        fontFamily: 'MontserratBold',
        fontSize: 17,
        textTransform: 'capitalize',
        marginBottom: 10,
        color: '#256738',
        textAlign: 'center'
    },
    contentText: {
        lineHeight: 20,
        fontSize: 14,
        color: '#256738',
        fontFamily: 'MontserratMedium'
    },
    img: {
        borderRadius: 7
    }
});