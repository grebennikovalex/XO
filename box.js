import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';


export default function Box({ item, pressHandler })  {
  
 return (

      <TouchableOpacity   
          style =  {[
          styles.box,
          {backgroundColor:  item.color ? '#6a89cc' : '#a9e4f1' }
          ]}
          disabled = {!item.flag}
          onPress = {() => {pressHandler(item.key)}}
          >
     

        <Image 
          style = {styles.stretch}
          source = {item.img}
         />
        
     
    </TouchableOpacity>
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