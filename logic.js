	
	

	
 export function winCheck(boxes) {
	
	for (let i = 0; i < 9; i++) {
		
	//checking rows
	
		if (boxes[0].mark == boxes[1].mark && boxes[1].mark == boxes[2].mark && boxes[2].mark != '') {
				if 		(boxes[0].num + boxes[1].num + boxes[2].num == 3) mark.mark = "x"
				else if (boxes[0].num + boxes[1].num + boxes[2].num == 9) mark.mark = "o";
				
				return true;
		}
		else if (boxes[3].mark == boxes[4].mark && boxes[4].mark == boxes[5].mark && boxes[5].mark != '') {
				if 		(boxes[3].num + boxes[4].num + boxes[5].num == 3) mark.mark = "x"
				else if (boxes[3].num + boxes[4].num + boxes[5].num == 9) mark.mark = "o";
				
				return true;
		}				
		else if (boxes[6].mark == boxes[7].mark && boxes[7].mark == boxes[8].mark && boxes[8].mark != '') {
				if 		(boxes[6].num + boxes[7].num + boxes[8].num == 3) mark.mark = "x"
				else if (boxes[6].num + boxes[7].num + boxes[8].num == 9) mark.mark = "o";
				
				return true;
		} 
		
		//checking columns
				
		else if (boxes[0].mark == boxes[3].mark && boxes[3].mark == boxes[6].mark && boxes[6].mark != '') {
				if 		(boxes[0].num + boxes[3].num + boxes[6].num == 3) mark.mark = "x"
				else if (boxes[0].num + boxes[3].num + boxes[6].num == 9) mark.mark = "o";
				
				return true;
		}
		else if (boxes[1].mark == boxes[4].mark && boxes[4].mark == boxes[7].mark && boxes[7].mark != '') {
				if 		(boxes[1].num + boxes[4].num + boxes[7].num == 3) mark.mark = "x"
				else if (boxes[1].num + boxes[4].num + boxes[7].num == 9) mark.mark = "o";
				
				return true;
		}
		else if (boxes[2].mark == boxes[5].mark && boxes[5].mark == boxes[8].mark && boxes[8].mark != '') {
				if 		(boxes[2].num + boxes[5].num + boxes[8].num == 3) mark.mark = "x"
				else if (boxes[2].num + boxes[5].num + boxes[8].num == 9) mark.mark = "o";
				
				return true;
		}
		
		//checking diagonals
				
		else if (boxes[0].mark == boxes[4].mark && boxes[4].mark == boxes[8].mark && boxes[8].mark != '') {
				if 		(boxes[0].num + boxes[4].num + boxes[8].num == 3) mark.mark = "x"
				else if (boxes[0].num + boxes[4].num + boxes[8].num == 9) mark.mark = "o";
				
				return true;
		}
		else if (boxes[2].mark == boxes[4].mark && boxes[4].mark == boxes[6].mark && boxes[6].mark != '') {
				if 		(boxes[2].num + boxes[4].num + boxes[6].num == 3) mark.mark = "x"
				else if (boxes[2].num + boxes[4].num + boxes[6].num == 9) mark.mark = "o";
				
				return true;
		}
		
		else return false;
		
		
		
	};	
};