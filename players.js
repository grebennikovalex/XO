import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, Text, Animated, Modal} from 'react-native';
import AddPlayer from './addPlayer';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const rightAction = ( playerName ) => {
  
    return(
        <View style = {styles.deletePlayer}>
            <Text style ={{
                fontSize: 20, 
                fontWeight: 'bold', 
                color: '#3b98e1', fontFamily: 'custom'}}>
            DELETE {playerName.toUpperCase()}  </Text>
        </View>
    )
}
         
    
export default function Players( { navigation } ) {

const [modalOpen, setModalOpen] = useState(false)

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

    players.map(player => console.log(player.playerName))

}



    return(
<View style = {styles.container}>
    <Modal 
    transparent
    visible = {modalOpen} 
    animationType = 'fade'>
        <View style = {styles.modal}>
        <AddPlayer 
        submitPlayer ={submitPlayer}
        setModalOpen = {setModalOpen}
        />
        </View> 
    </Modal>
    

   <View style = {styles.list}>

        <TouchableOpacity 
            onPress = {() => {setModalOpen(true)}}> 
            <View style = {styles.addbtn}>
                <Text style = {[styles.text, {alignSelf: 'center'}]}>
                    ADD NEW PLAYER
                </Text>
            </View>
       </TouchableOpacity>
   
   
        <FlatList 
            data = {players}
            renderItem = {({ item }) => (
            <Swipeable 
                renderLeftActions = {()  => rightAction(item.playerName)}
                onSwipeableWillOpen = {() => delPlayer(item.key)}>        
                    <TouchableOpacity 
                        style = {[styles.player,
                        {backgroundColor: item.color}]}
                        onPress={() => navigation.navigate('Board', item)}>
                         <Text style = {styles.text}>
                            {item.playerName.toUpperCase()}   
                        </Text>  
                        <Text  style = {styles.text}>  
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
        justifyContent: 'flex-start',
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
        
    },

    text: {
        alignSelf: 'flex-end',
        fontSize: 30, 
         
        color: 'white', 
        fontFamily: 'custom'

    },

    modal: {
        flex: 1,
        //opacity: .5,
        backgroundColor: '#a9e4f1',
        alignItems: 'center',
        justifyContent: 'center'
    },

    addbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#487eb0',
        height: 75,
        width: Dimensions.get('screen').width * 0.9,
        
    }
   

})