import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import { useAuth } from "../Context/AuthContext";
import Style from '../../Style';

function LoginView ({navigation}:any) {
    const { login } = useAuth();
    return (
    <View style={Style.container}>
      <Image source={require('../../assets/logo_UNICEF.png')} />
      <Text>Ecran de connexion</Text>
      <Text>Connexion à mon compte UNICEF</Text>
      <Button title="Se connecter" onPress={() => login()} />
      <Text onPress={() => navigation.navigate('ForgetPassword')} style={Style.text_button}> Mot de passe oublié ? </Text>
      <Text> Pas encore inscrit ? </Text><Text onPress={() => navigation.navigate('SignUp')} style={Style.text_button}> S'inscrire </Text>
    </View>
  );
}
export default LoginView;

