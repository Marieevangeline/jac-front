import React from "react";
import { useAuth } from "../Context/AuthContext";
import LoginView from "../Views/LoginView";
import ConnexionNavigator from "./ConnexionNavigator";
import TabNavigator from "./TabNavigator";

function AuthNavigator(): any {
  const { isAuthentificated }: any = useAuth();
  if (!isAuthentificated) {
    return <ConnexionNavigator />;
  } else {
    return <TabNavigator />;
  }
}

export default AuthNavigator;