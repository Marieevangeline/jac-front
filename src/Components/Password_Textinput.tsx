import React from "react";
import { View, TextInput, Image} from "react-native";
import Style from "../../Styles/Style_home";


const PasswordTextInput = () => {
  const [number, setText] = React.useState("");

  return (
    <View style={Style.input}>
    <Image source={require('../../assets/fermer-a-cle.png')} />
      <TextInput
        style={Style.text_input}
        onChangeText={newNumber => setText(newNumber)}
        defaultValue={number}
        placeholder="Mot de passe"
        keyboardType="numeric"
      />
    <Image source={require('../../assets/croise-les-yeux.png')} />
    </View>
  );
};


export default PasswordTextInput;