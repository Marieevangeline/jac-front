import React, { useState} from "react";

import { View, TextInput, Image } from "react-native";
import Style from "../../Styles/Style_home";

const EmailTextInput = () => {
  const [text, setText] = useState('');
  
  return (
    <View style={Style.input}>
      <Image source={require('../../assets/@.png')} />
      <TextInput
        style={Style.text_input}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholder="Adresse email"
       />
    </View>
  );
};


export default EmailTextInput;