import {StyleSheet} from 'react-native';
import fonts from '../../assets/fonts/fonts';
import Colors from '../../styles/colors';
export default StyleSheet.create({
  fieldContainer: {
    borderRadius: 4,
    width: '80%',
    borderWidth: 2,
    borderColor: Colors.GRAY_LINE,
  },
  headingText: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  parentContainer: {
    flex: 1,
  },
  itemSeperator: {
    paddingVertical: 6,
  },
  addItem: {
    marginLeft: 10,
  },
  valueText: {
    fontSize: 18,
    fontFamily: fonts.lato,
    marginVertical: 3,
    marginLeft: 5,
  },
  container: {
    padding: 12,
    marginTop: 5,
  },
  parentStyle: {
    flex: 1,
  },
  input: {
    height: 50,
    justifyContent: 'space-between',
    borderColor: Colors.DARK_GRAY,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
    fontFamily: fonts.lato,
  },
  buttontext: {
    display: 'flex',
    alignItems: 'center',
    top: 200,
    padding: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: fonts.lato,
    fontWeight: 'bold',
  },
});
