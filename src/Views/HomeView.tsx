import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Button, TextInput } from "react-native";
import Style from "../../Styles/Style_home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

function HomeView(props: any) {
    return (
        <View style={Style.container}>
            <text>Page d'accueil</text>
        </View>
    );
  
}
export default HomeView;
