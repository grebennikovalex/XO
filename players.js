import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, Text, Animated} from 'react-native';
import AddPlayer from './addPlayer';
import Swipeable from 'react-native-gesture-handler/Swipeable';

let opacity = 1

const rightAction = (progress, dragX) => {
    opacity = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0.5, 0]

})
    return(
        <View style = {styles.deletePlayer}>
            <Text style ={{
                fontSize: 20, 
                fontWeight: 'bold', 
                color: '#3b98e1', fontFamily: 'custom'}}
            > DELETE PLAYER  </Text>
        </View>
    )
}


           
    

export default function Players({ navigation }) {

const [players, setPlayer] = useState([
    {key: 0, playerName: 'Kotsky', won: 0, lost: 0, color: '#a9e4f1'},
    {key: 1, playerName: 'Denis', won: 0, lost: 0, color: '#a9e4f1'},
    {key: 2, playerName: 'Fomin', won: 0, lost: 10, color: '#a9e4f1'}
   ])



const delPlayer = (key) => {
    setPlayer((prevPlayers) => {
        return prevPlayers.filter(player => player.key != key)
    })
} 

const submitPlayer = (player) => {
    setPlayer((prevPlayers) => {
        return [
            {key: Math.random().toString(), playerName: player, won: 0, lost: 0, color: '#a9e4f1'},
            ...prevPlayers
        ]
    })
}



    return(
<View style = {styles.container}>
   <View style = {styles.list}>
   <AddPlayer submitPlayer ={submitPlayer}/>
   
        <FlatList 
            data = {players}
            renderItem = {({ item }) => (
            <Swipeable 
                renderLeftActions = {rightAction}
                onSwipeableWillOpen = {() => delPlayer(item.key)}>        
                    <TouchableOpacity 
                        activeOpacity = {0.5}
                        style = {[styles.player,
                        {backgroundColor: item.color}]}
                        onPress={() => navigation.navigate('Board', item)}>
                         <Text style = {{
                            alignSelf: 'flex-end',
                            fontSize: 30, 
                            fontWeight: 'bold', 
                            color: 'white', fontFamily: 'custom'}}>
                            {item.playerName.toUpperCase()}   
                        </Text>  
                        <Text  style = {{
                            alignSelf: 'flex-end',
                            fontSize: 30, 
                            fontWeight: 'bold', 
                            color: 'white', fontFamily: 'custom'}}>  
                            {item.lost} - {item.won}
                        </Text>
                    </TouchableOpacity>
        </Swipeable>
        )}
        />
    
    </View>
</View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a9e4f1'
    },

    list: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    player: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: 55,
        width: Dimensions.get('screen').width * 0.9,
        margin: 5,
        paddingLeft: 20,
        paddingBottom: 2,
        borderBottomColor: 'white',
        borderBottomWidth: 3, 
        
    },

    deletePlayer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        height: 55,
        margin: 5,
        paddingBottom: 2,
        paddingLeft: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#3b98e1',
        
        }

})