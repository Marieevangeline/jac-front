import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import LoginView from "../Views/LoginView";
import SignUpView from "../Views/SignupView";
import Changemotdepasse from "../Views/Changemotdepasse";

const Stack = createNativeStackNavigator();

function ConnexionNavigator(props: any) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginView} options={{ headerShown: false }}/>
          <Stack.Screen name="SignUp" component={SignUpView} options={{ headerShown: false }}/>
          <Stack.Screen name="Changemotdepasse" component={Changemotdepasse} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default ConnexionNavigator;