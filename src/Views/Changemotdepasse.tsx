import React from "react";
import {Text, View, Button, Image} from 'react-native';
import EmailTextInput from '../Components/Email_TextInput';
import Style from "../../Styles/Style_home";

function ForgetPassword({navigation}:any) {
    return(
        <View style={Style.container}> 
            <Image source={require('../../assets/logo_UNICEF.png')} />
            <Text style={{fontSize:23,fontFamily:'Poppins',fontWeight:'bold',margin:20,marginRight:55}}>Mot de passe oublié ?</Text>            <Text>Saisissez l'adresse e-mail associée à votre compte</Text>
            <EmailTextInput/>
            <Text style={{margin:20}}>Saisissez l'adresse e-mail associée à votre compte</Text>
            <Button title="Valider" onPress={() => navigation.navigate('SignUp')} />
            <View style={{marginVertical:20, flexDirection:"row"}}>
              <Text onPress={() => navigation.navigate('Login')} style={Style.text_button}> Annuler </Text>
            </View>
        </View>
    )
}

export default ForgetPassword; 