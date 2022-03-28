import {StyleSheet} from 'react-native';

backgroundColor_default = "#A9EAFE";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor_default,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text_button: {
      color: '#1962D0',
      fontSize: '13',
      fontStyle: 'normal',
      textAlignVertical: 'auto',     
    },
    text_input: {
      borderBottomWidth: 1,
      borderBottomWidth : 'DDDEE',
      marginHorizontal: 20,

    },
    input: {
      margin: 20,
      borderWidth: 2,
      flexDirection: "row"
    },

  });
