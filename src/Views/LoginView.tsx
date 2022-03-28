import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import { useAuth } from "../Context/AuthContext";
import PasswordTextInput from '../Components/Password_Textinput';
import EmailTextInput from '../Components/Email_TextInput';
import Style from '../../Style';

function LoginView ({navigation}:any) {
    const { login } = useAuth();
    return (
    <View style={Style.container}>
      <Image source={require('../../assets/logo_UNICEF.png')} />
      <Text style={{fontSize:24,fontFamily:'Poppins',fontWeight:'bold',margin:20,marginRight:55}}>Connexion à mon compte UNICEF</Text>
      <EmailTextInput/>
      <PasswordTextInput/>
      <Button title="Se connecter" onPress={() => login()} />
      <Text onPress={() => navigation.navigate('ForgetPassword')} style={Style.text_button}> Mot de passe oublié ? </Text>
      <Text> Pas encore inscrit ? </Text><Text onPress={() => navigation.navigate('SignUp')} style={Style.text_button}> S'inscrire </Text>
    </View>
  );
}
export default LoginView;

