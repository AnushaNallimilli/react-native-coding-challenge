import {StyleSheet} from 'react-native';
import fonts from '../../../assets/fonts/fonts';
import Colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  text: {
    color: Colors.NAVY_BLUE,
    fontFamily: fonts.lato,
    fontSize: 14,
  },
});
