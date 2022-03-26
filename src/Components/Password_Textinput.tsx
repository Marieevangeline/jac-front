import React from "react";
import { View, TextInput, Image} from "react-native";
import Style from "../../Style";


const PasswordTextInput = () => {
  const [number, setText] = React.useState("null");

  return (
    <View>
      <Image source={require('../../assets/croise-les-yeux.png')} />
      <TextInput
        style={Style.input}
        onChangeText={newNumber => setText(newNumber)}
        defaultValue={number}
        placeholder="Mot de passe"
        keyboardType="numeric"
      />
    </View>
  );
};


export default PasswordTextInput;