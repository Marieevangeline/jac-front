import React from 'react';
import {Text, View, Button, Image} from 'react-native';
import { useAuth } from "../Context/AuthContext";
import PasswordTextInput from '../Components/Password_Textinput';
import EmailTextInput from '../Components/Email_TextInput';
import Style from '../../Styles/Style_home';

function LoginView ({navigation}:any) {
  const { login } = useAuth();
  return (
   <View style={Style.container}>
     <Image source={require('../../assets/logo_UNICEF.png')} />
     <Text style={{fontSize:24,fontFamily:'Poppins',fontWeight:'bold',margin:20,marginRight:55}}>Connexion à mon compte UNICEF</Text>
     <EmailTextInput/>
    <PasswordTextInput/>
    <View style={{margin:20, width:"90%", flexDirection:"row-reverse"}}>
      <Text onPress={() => navigation.navigate('Changemotdepasse')} style={Style.text_button}> Mot de passe oublié ? </Text>
     </View>
     <Button title="Se connecter" onPress={() => login()} />
     <View style={{marginVertical:20}}>
       <Text> Pas encore inscrit ? </Text><Text onPress={() => navigation.navigate('SignUp')} style={Style.text_button}> S'inscrire </Text>
     </View>
    </View>
  );
 }
    
  
export default LoginView;


