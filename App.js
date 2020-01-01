import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './header'; import Board from './board';

import * as Font from 'expo-font';
import { AppLoading } from 'expo'; 


const getFonts = () => Font.loadAsync({ 'baloo-bhai': require('./assets/BalooBhai-Regular.ttf') })




export default function App()  {

const[fontsLoaded, setFontsLoaded] = useState(false);

if(fontsLoaded){
    return (
      <View style = {styles.container}>
      <Header />
      <Board />
      </View>
    )

  } else {
    return (
    <AppLoading 
    startAsync = {getFonts}
    onFinish = {() => setFontsLoaded(true)}
    />
    )
  };

}

const styles = StyleSheet.create({
   container: {
      flex: 1 } 
    })
