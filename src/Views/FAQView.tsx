import { StyleSheet, Button, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { Text, View } from "react-native";
import Style from "../../Style";

function FAQView() {
    return(
        <View style={Style.container}> 
            <Text>FAQ</Text>
        </View>
    )

}

export default FAQView; 