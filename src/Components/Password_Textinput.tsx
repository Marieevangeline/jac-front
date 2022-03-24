import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const PasswordTextInput = () => {
  const [number, onChangeNumber] = React.useState("null");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mot de passe"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default PasswordTextInput;