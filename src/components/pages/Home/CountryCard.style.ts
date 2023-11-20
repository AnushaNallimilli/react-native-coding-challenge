import { StyleSheet } from 'react-native';
import Colors from '../../../styles/colors';
import fonts from '../../../assets/fonts/fonts';
export default StyleSheet.create({
    primaryText: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: fonts.lato,
        color: Colors.DARK_GRAY,
        marginVertical: 3,
    },
    secondaryText: {
        fontSize: 16,
        fontFamily: fonts.lato,
        color: Colors.DARK_BLUE,
    },
    flexRow: {
        fontSize: 14,
        fontFamily: fonts.lato,
        color: Colors.DARK_BLUE,
    },
    lozengeWrapper: {
        fontSize: 14,
        marginTop: -10,
        fontFamily: fonts.lato,
        color: Colors.RED_LOGOUT,
    },
    imageView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
