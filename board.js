import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import Box from './box';

  
export default function Board()  {

   const [boxes, putMark] = useState([ 
      {mark: '', key: 0, img: '', flag: true, num: 0, move: 0, win: '', color: false},  
      {mark: '', key: 1, img: '', flag: true, num: 0, move: 0, win: '', color: false},  
      {mark: '', key: 2, img: '', flag: true, num: 0, move: 0, win: '', color: false},  
      {mark: '', key: 3, img: '', flag: true, num: 0, move: 0, win: '', color: false},  
      {mark: '', key: 4, img: '', flag: true, num: 0, move: 0, win: '', color: false},  
      {mark: '', key: 5, img: '', flag: true, num: 0, move: 0, win: '', color: false},  
      {mark: '', key: 6, img: '', flag: true, num: 0, move: 0, win: '', color: false},  
      {mark: '', key: 7, img: '', flag: true, num: 0, move: 0, win: '', color: false},  
      {mark: '', key: 8, img: '', flag: true, num: 0, move: 0, win: '', color: false}
      ]);

        
const pressHandler = (key) => {
  
    putMark((boxes) => {
    return boxes.map(box => {
      box.move++
             
        if (box.key === key) {
          if(box.mark === '') { 
          box.mark = 'o'
          box.img = require('./assets/o.png')
          box.flag = false
          box.num = 5
          console.log(box.move)
          console.log(box.win)
          }
        }
        
        return box

        
    });

  });

  logic(boxes)
      
  }   
  
    
 function randomX(boxes)  { 
      
    let flag = true
    while (flag) {
  
    let box = Math.floor(Math.random() * 9)
  
      for(let i = 0; i < 9; i++) {
        if (boxes[box].mark === '') {
            putX(box, false)           
            flag = false
            } 
      }
    } 
  }


  function reloadBoard() {

    putMark((boxes) => {
    return  boxes.map(box => {
        box.mark = ''
        box.img = ''
        box.flag = true
        box.num = 0
        box.move = 0
        box.win =''
        box.color = false
        
        return box

        
    });

  });
  randomX(boxes)
  }

  
  
  function putX(box, bool) {
    boxes.map(box => box.move++)
    boxes[box].flag = false
    boxes[box].mark = 'x'
    boxes[box].num = 1
    boxes[box].img = require('./assets/x.png')
  
  }
  
   function logic(boxes) {
              
    for (let i = 0; i < 9; i++) {
        
        //checking for winner "O"
        
        if (boxes[0].num + boxes[1].num + boxes[2].num === 15) {
          boxes.map(box => box.mark = 'o')	
                winFill(0,1,2)
                return
        }
        
        if (boxes[3].num + boxes[4].num + boxes[5].num === 15) {
          boxes.map(box => box.mark = 'o')		
                winFill(3,4,5)
                return
        }
        
        if (boxes[6].num + boxes[7].num + boxes[8].num === 15) {
          boxes.map(box => box.mark = 'o')		
                winFill(6,7,8)
                return
        }
        
        if (boxes[0].num + boxes[3].num + boxes[6].num === 15) {
          boxes.map(box => box.mark = 'o')		
                winFill(0,3,6)
                return
        }
        
        if (boxes[1].num + boxes[4].num + boxes[7].num === 15) {
          boxes.map(box => box.mark = 'o')		
                winFill(1,4,7)
                return
        }
        
        if (boxes[2].num + boxes[5].num + boxes[8].num === 15) {
          boxes.map(box => box.mark = 'o')	
                winFill(2,5,8)
                return
        }
        
        if (boxes[0].num + boxes[4].num + boxes[8].num === 15) {
          boxes.map(box => box.mark = 'o')		
                winFill(0,4,8)
                return
        }
        
        if (boxes[2].num + boxes[4].num + boxes[6].num === 15) {
          boxes.map(box => box.mark = 'o')		
                winFill(2,4,6)
                return
        }
        
        //checking for winner "X"
        
        // rows
    
        else if (boxes[0].num + boxes[1].num + boxes[2].num === 2) {
                if (boxes[0].num === 0) putX(0, true)
                else if (boxes[1].num === 0) putX(1, true)
                else if (boxes[2].num === 0) putX(2, true)
                boxes.map(box => box.mark = 'x')	
                winFill(0,1,2)
                return
        }
        
        else if (boxes[3].num + boxes[4].num + boxes[5].num === 2) {
                if (boxes[3].num === 0) putX(3, true)
                else if (boxes[4].num === 0) putX(4, true)
                else if (boxes[5].num === 0) putX(5, true)
                boxes.map(box => box.mark = 'x')	
                winFill(3,4,5)
                return
        }

        else if (boxes[6].num + boxes[7].num + boxes[8].num === 2) {
                if (boxes[6].num === 0) putX(6, true)
                else if (boxes[7].num === 0) putX(7, true)
                else if (boxes[8].num === 0) putX(8, true)
                boxes.map(box => box.mark = 'x')	
                winFill(6,7,8)
                return
        } 
                
        // columns
                
        else if (boxes[0].num + boxes[3].num + boxes[6].num === 2) {
                if (boxes[0].num === 0) putX(0, true)
                else if (boxes[3].num === 0) putX(3, true)
                else if (boxes[6].num === 0) putX(6, true)
                boxes.map(box => box.mark = 'x')	
                winFill(0,3,6)
                return
        }
                        
        else if (boxes[1].num + boxes[4].num + boxes[7].num === 2) {
                if (boxes[1].num === 0) putX(1, true)
                else if (boxes[4].num === 0) putX(4, true)
                else if (boxes[7].num === 0) putX(7, true)
                boxes.map(box => box.mark = 'x')	
                winFill(1,4,7)
                return
        }
        
        else if (boxes[2].num + boxes[5].num + boxes[8].num === 2) {
                if (boxes[2].num === 0) putX(2, true) 
                else if (boxes[5].num === 0) putX(5, true) 
                else if (boxes[8].num === 0) putX(8, true)
                boxes.map(box => box.mark = 'x')	
                winFill(2,5,8)
                return
        }
        
        // diagonals
                
        else if (boxes[0].num + boxes[4].num + boxes[8].num === 2) {
                if (boxes[0].num === 0) putX(0, true)
                else if (boxes[4].num === 0) putX(4, true)
                else if (boxes[8].num === 0) putX(8, true)
                boxes.map(box => box.mark = 'x')	
                winFill(0,4,8)
                return
        }
                
        else if (boxes[2].num + boxes[4].num + boxes[6].num === 2) {
                if (boxes[2].num === 0) putX(2, true)
                else if (boxes[4].num === 0) putX(4, true)
                else if (boxes[6].num === 0) putX(6, true)
                boxes.map(box => box.mark = 'x')	
                winFill(2,4,6)
                return
        }
        
        // checking for "O"
        
        // rows
    
        if (boxes[0].num + boxes[1].num + boxes[2].num === 10) {
                if 		(boxes[0].num === 0) putX(0, false)
                else if (boxes[1].num === 0) putX(1, false)
                else if (boxes[2].num === 0) putX(2, false)
                return
        }
                
        
        else if (boxes[3].num + boxes[4].num + boxes[5].num === 10) {
                if 		(boxes[3].num === 0) putX(3, false)
                else if (boxes[4].num === 0) putX(4, false)
                else if (boxes[5].num === 0) putX(5, false)
                return
        }		
        
        
        else if (boxes[6].num + boxes[7].num + boxes[8].num === 10) {
                if 		(boxes[6].num === 0) putX(6, false)
                else if (boxes[7].num === 0) putX(7, false)
                else if (boxes[8].num === 0) putX(8, false)
                return
        } 
        
        
        // columns
                
        else if (boxes[0].num + boxes[3].num + boxes[6].num === 10) {
                if 		(boxes[0].num === 0) putX(0, false)
                else if (boxes[3].num === 0) putX(3, false)
                else if (boxes[6].num === 0) putX(6, false)
                return	
        }
        
        
        else if (boxes[1].num + boxes[4].num + boxes[7].num === 10) {
                if 		(boxes[1].num === 0) putX(1, false)
                else if (boxes[4].num === 0) putX(4, false)
                else if (boxes[7].num === 0) putX(7, false)
                return	
        }
        
        
        else if (boxes[2].num + boxes[5].num + boxes[8].num === 10) {
                if 		(boxes[2].num === 0) putX(2, false)
                else if (boxes[5].num === 0) putX(5, false)
                else if (boxes[8].num === 0) putX(8, false)
                return
        }
                
        
        // diagonals
                
        else if (boxes[0].num + boxes[4].num + boxes[8].num === 10) {
                if 		(boxes[0].num === 0) putX(0, false)
                else if (boxes[4].num === 0) putX(4, false)
                else if (boxes[8].num === 0) putX(8, false)
                return
        }
        

        
        else if (boxes[2].num + boxes[4].num + boxes[6].num === 10) {
                if 		(boxes[2].num === 0) putX(2, false)
                else if (boxes[4].num === 0) putX(4, false)
                else if (boxes[6].num === 0) putX(6, false)
                return
        }
                
    }
    
    randomX(boxes) 	
    
}

function winFill(a, b, c) {
  boxes[a].color = true
  boxes[b].color = true
  boxes[c].color = true
  boxes.map(box => box.flag = false)
}

   return (
    
    <View style = {{flex: 1}}>
    <View style = {styles.board}>
          <FlatList 
          data = {boxes}
          numColumns = '3'
          renderItem = {({ item }) => (
          <Box 
          item = {item} 
          pressHandler = {pressHandler}/> )}
          />
    </View>
     <TouchableOpacity 
     style = {styles.reload}
     onPress = {() => reloadBoard()}>
         <Text style = {{
             fontSize: 20, 
             fontWeight: 'bold', 
             color: 'white', fontFamily: 'custom'}}>
             RELOAD    
         </Text>    
    </TouchableOpacity>
    </View>  

    
    )
}

const styles = StyleSheet.create({

  board: {
    height: Dimensions.get('screen').width + 3,
    flexDirection: 'row',
    padding: 3,
    justifyContent: 'center',
  },

  reload: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
    height: '20%',
    backgroundColor: '#273c75',
  },
  
})

	
              
   