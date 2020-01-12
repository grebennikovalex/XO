import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; 
import Navigator from './routes/homeStack';


const getFonts = () => Font.loadAsync({ 'custom': require('./assets/fonts/MPLUSRounded1c-Black.ttf') });



export default function App()  {

  const[fontsLoaded, setFontsLoaded] = useState(false);
  
  

if(fontsLoaded){
    return (
      <Navigator/>
    )

  } else {
    return (
    <AppLoading 
    startAsync = {getFonts}
    onFinish = {() => setFontsLoaded(true)}
    />
    )
  }

}
