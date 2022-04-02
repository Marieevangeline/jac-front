import React from "react";
import {Text, View, Button, Image} from 'react-native';
import EmailTextInput from '../Components/Email_TextInput';
import Style from "../../Styles/Style_home";

function ForgetPassword({navigation}:any) {
    return(
        <View style={Style.container}> 
            <Image source={require('../../assets/logo_UNICEF.png')} />
            <Text>Mot de passe oublié ?</Text>
            <Text>Saisissez l'adresse e-mail associée à votre compte</Text>
            <EmailTextInput/>
           
            <Button title="Valider" onPress={() => navigation.navigate('SignUp')} />
            <Button title="Annuler" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

export default ForgetPassword; 