

export default function randomX(boxes) { 
    let flag = true
        while (flag) {
        let box = Math.floor(Math.random() * 9)
            for (let i = 0; i < boxes.length; i++) {
            if (boxes[box].mark === '') {
            boxes[box].flag = true
            boxes[box].mark =  'x'
            boxes[box].num =  1
            flag = false
            }
        }
  
    }
    return box
}

