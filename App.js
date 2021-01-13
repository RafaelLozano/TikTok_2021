import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import Router from './src/navigation/Router';
import Home from './src/screens/Home/Home';

// Amplify
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
      <StatusBar style="light" />
      <Router />
    </SafeAreaView>
  );
}

