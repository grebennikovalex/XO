import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './header'; 
import Board from './board'; 
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; 


const getFonts = () => Font.loadAsync({ 'custom': require('./assets/fonts/MPLUSRounded1c-Black.ttf') })


export default function App()  {

  const[fontsLoaded, setFontsLoaded] = useState(false);

if(fontsLoaded){
    return (
      <View style = {{flex: 1}}>
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
