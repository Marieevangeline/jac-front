import {StyleSheet} from 'react-native';

backgroundColor_default = "#FEFEFE";

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
        minWidth: 200,
       borderBottomWidth: 1,
       borderBottomColor : '#DDDEE1',
       marginHorizontal: 20,
    },
    input: {
      margin: 20,
      flexDirection: "row"
    },

  });
