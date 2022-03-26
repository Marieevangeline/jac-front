import React, { useState} from "react";

import { View, TextInput, Image } from "react-native";
import Style from "../../Style";

const EmailTextInput = () => {
  const [text, setText] = useState('');
  
  return (
    <View style={{padding: 10}}>
      <Image source={require('../../assets/@.png')} />
      <TextInput
        style={Style.input}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        placeholder="Adresse mail"
       />
    </View>
  );
};


export default EmailTextInput;