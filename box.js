import React, { useEffect } from 'react';
import { StyleSheet, Dimensions, TouchableWithoutFeedback, Animated, View, TouchableOpacity } from 'react-native';


export default function Box({ item, pressHandler })  {

  const markScale = new Animated.Value(.1);
  
  useEffect(() => {
    Animated.spring(
      markScale,
      {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true
      }
    ).start();
  }, [item.mark])

const animatedStyle = {transform: [{scale: markScale}]}
  
return (
    
      <TouchableWithoutFeedback
         
             disabled = {!item.flag}
             onPress = {() => {pressHandler(item.key)}}>    
          <View 
             style =  {[
             styles.box,
             {backgroundColor:  item.color }
             ]}>

          <Animated.Image 
             style = {animatedStyle}
             source = {item.img}/> 
          </View>  
      </TouchableWithoutFeedback>
    
  )

}

const styles = StyleSheet.create({

  box: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('screen').width / 3)-8,
        height: (Dimensions.get('screen').width / 3)-8,
        margin: 3,
    
      }
     
})