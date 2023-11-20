import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts/fonts';
export default StyleSheet.create({
    fieldContainer: {
        borderRadius: 4,
        width: '100%',
    },
    headingText: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    valueText: {
        fontSize: 18,
        fontFamily: fonts.lato,
        marginVertical: 3,
        marginLeft: 5,
    },
});
