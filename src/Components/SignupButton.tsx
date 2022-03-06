import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {creativeNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View, SignupView} from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  isSecured?: boolean;
}
function SignupButton({ value, onChangeText, isSecured }: Props) {
  return (
    <SignupView
      style={{
        width: 200,
        height: 20,
        backgroundColor: "blue",
        marginBottom: 20,
      }}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={isSecured}
    />
  );
}

const styles = StyleSheet.create({});

export default SignupButton;