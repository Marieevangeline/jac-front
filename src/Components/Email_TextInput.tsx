import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const EmailTextInput = () => {
  const [text, onChangeText] = React.useState("null");
  
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="useless placeholder"
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

export default EmailTextInput;