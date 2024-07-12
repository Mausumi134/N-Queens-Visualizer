
import addQueen from "./AddQueen.js"; 
import removeQueen from "./RemoveQueen.js"; 
import cloneTableOfSizeN from "./CloneChessBoard.js"; 
import generateTableOfSizeN from "./GenerateChessBoard.js"; 
import { markCurrentSqaureBlue, removeSquareColor } from "./MarkCurrentSquare.js"



let countOfChessBoards = 1;

let animationsArr = new Array();


function setCountOfChessBoards(valueToSet) {
    countOfChessBoards = valueToSet;
}


function clearAnimationsArr() {
    animationsArr = new Array();
}


function getAnimationsArr(matrix, row) {
    
    printNQueens(matrix, row);
    return animationsArr;
}




function printNQueens(chess, row) {
  
    if (row == chess.length) {
        countOfChessBoards++;
      
        animationsArr.push([cloneTableOfSizeN, [chess.length, countOfChessBoards]]);

        return;
    }

    
    for (let col = 0; col < chess.length; col++) {
        

    
        animationsArr.push([markCurrentSqaureBlue, [row, col, countOfChessBoards]]);

        if (chess[row][col] == 0 && isQueenSafe(chess, row, col) == true) {
            
            chess[row][col] = 1;

         
            animationsArr.push([markCurrentSqaureBlue, [row, col, countOfChessBoards]]);

            animationsArr.push([addQueen, [row, col, countOfChessBoards]]);

            animationsArr.push([removeSquareColor, [row, col, countOfChessBoards]]);

            
            printNQueens(chess, row + 1);

           
            chess[row][col] = 0;
          
            animationsArr.push([removeQueen, [row, col, countOfChessBoards]]);
        }

      
        animationsArr.push([removeSquareColor, [row, col, countOfChessBoards]]);
    }
}


function isQueenSafe(chess, row, col) {
    
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        
        if (chess[i][j] == 1) {
            return false;
        }
    }

   
    for (let i = row - 1, j = col; i >= 0; i--) {
        
        if (chess[i][j] == 1) {
            return false;
        }
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
        
        if (chess[i][j] == 1) {
            return false;
        }
    }
    return true;
}

export { setCountOfChessBoards, clearAnimationsArr, getAnimationsArr };
