import React from "react";
import { Text, ScrollView, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { useAuth } from "../Context/AuthContext";
import SignUpView from './SignupView';
import Changemotdepasse from './Changemotdepasse';
import Style from '../../Style';

function LoginView (navigation): {
    const { login } = useAuth();
    return (
    <View style={Style.container}>
      <Text>Ecran de connexion</Text>
      <Text>Connexion à mon compte UNICEF</Text>
      <Button title="Se connecter" onPress={() => login()} />
      <Button title="Mot de passe oublié ?" onPress={() => navigation.navigator('Changemotdepasse')} />
      <Text>Pas encore inscrit ?</Text>
      <Button title="S'inscrire" onPress={() => navigation.navigator('SignUpView')} />
    </View>
  );
}
export default LoginView;