import React from 'react'; import { winCheck } from './logic';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import Box from './box'; 

function randomX(boxes) {
    boxes.map(box => box.move++)
    let flag = true
    while (flag) {
  
    let r = Math.floor(Math.random() * 9)
  
      for(let i = 0; i < 9; i++) {
        if (boxes[r].mark === '') {
            boxes[r].flag = false
            boxes[r].mark = 'x'
            boxes[r].num = 1
            boxes[r].img = require('./assets/x.png')
            flag = false
            } 
      }
    }
  
    if(winCheck(boxes)) {
        return
    }
    console.log(boxes[3].move)
    }
  
    function reloadBoard() {
      putMark((boxes) => {
      return  boxes.map(box => {
          box.mark = ''
          box.img = ''
          box.flag = true
          box.num = 0
          box.move = 0
          return box
      })
      });
    }
  

export default function Board()  {
    const [boxes, putMark] = useState([ 
        {mark: '', key: 0, img: '', flag: true, num: 0, move: 0},  
        {mark: '', key: 1, img: '', flag: true, num: 0, move: 0},  
        {mark: '', key: 2, img: '', flag: true, num: 0, move: 0},  
        {mark: '', key: 3, img: '', flag: true, num: 0, move: 0},  
        {mark: '', key: 4, img: '', flag: true, num: 0, move: 0},  
        {mark: '', key: 5, img: '', flag: true, num: 0, move: 0},  
        {mark: '', key: 6, img: '', flag: true, num: 0, move: 0},  
        {mark: '', key: 7, img: '', flag: true, num: 0, move: 0},  
        {mark: '', key: 8, img: '', flag: true, num: 0, move: 0}
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
          box.num = 3
          console.log(box.move)
          }
        }
        
        return box
    });
  });

  
  if(winCheck(boxes)) {
    return
  }

  if(boxes[0].move < 9) randomX(boxes)
  
}

    return (

    <View style = {styles.board}>
          <FlatList 
          data = {boxes}
          numColumns = '3'
          renderItem = {({ item }) => (
          <Box 
          item = {item} 
          pressHandler = {pressHandler}/> )}
            />
    

    <TouchableOpacity 
        style = {styles.reload}
        onPress = {() => reloadBoard(boxes)}>
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
    height: '10%',
    backgroundColor: '#273c75',
  }
});