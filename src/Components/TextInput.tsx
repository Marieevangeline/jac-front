import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  isSecured?: boolean;
}
function TextInputComponent({ value, onChangeText, isSecured }: Props) {
  return (
    <TextInput
      style={{
        width: 200,
        height: 20,
        backgroundColor: "red",
        marginBottom: 20,
      }}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={isSecured}
    />
  );
}

const styles = StyleSheet.create({});

export default TextInputComponent;
