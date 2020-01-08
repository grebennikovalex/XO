import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function  Header({ box }) {
   
          
    return (

        <View style = {styles.header}>
            <Text style = {{
                fontSize: 20, 
                fontWeight: 'bold', 
                color: 'white', fontFamily: 'custom'  }}>
                MOVE: {box.move}    WINNER:  {box.win}
            </Text>
            
        </View>
    ) 
}

const styles = StyleSheet.create({
    
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 28,
      height: '10%',
      backgroundColor: '#273c75',
     
    }
})    