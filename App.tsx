import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AuthProvider } from './src/Context/AuthContext';
import AuthNavigator from './src/Routes/AuthNavigator';
import Style from './Styles/Style_home';

export default function App() {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
}

 
