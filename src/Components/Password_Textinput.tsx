import React from "react";
import { View, TextInput, Image} from "react-native";
import Style from "../../Style";


const PasswordTextInput = () => {
  const [number, setText] = React.useState("");

  return (
    <View style={Style.input}>
    <Image source={require('../../assets/croise-les-yeux.png')} />
      <TextInput
        style={Style.text_input}
        onChangeText={newNumber => setText(newNumber)}
        defaultValue={number}
        placeholder="Mot de passe"
        keyboardType="numeric"
      />
    </View>
  );
};


export default PasswordTextInput;