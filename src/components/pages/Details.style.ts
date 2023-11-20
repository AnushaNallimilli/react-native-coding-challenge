import { StyleSheet } from 'react-native';
import fonts from '../../assets/fonts/fonts';
import Colors from '../../styles/colors';
export default StyleSheet.create({
    countryText: {
        display: 'flex',
        borderRadius: 5,

        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
        //borderBottomColor: 'red',
    },
    primaryText: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: fonts.lato,
        color: Colors.BLACK,
        marginVertical: 3,
        textAlign: 'center',
    },
    secondaryText: {
        fontSize: 16,
        fontFamily: fonts.lato,
        color: Colors.DARK_BLUE,
    },
    fieldContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 5,
        marginBottom: 10,
        marginTop: 10,
        borderBottomWidth: 1,
        borderColor: Colors.GRAY_LINE,
        width: '90%',
    },
    headingText: {
        fontSize: 20,
        fontFamily: fonts.lato,
        color: Colors.DARK_GRAY,
        marginVertical: 3,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    valueText: {
        fontSize: 18,
        fontFamily: fonts.lato,
        marginVertical: 3,
        marginLeft: 5,
    },
    imageText: {
        width: 150,
        height: 90,
    },
    imageView: {
        alignItems: 'center',
        marginTop: 20,
    },
});
