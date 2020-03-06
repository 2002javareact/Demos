import {  IT3State } from ".";
import { AnyAction } from "redux";
import { t3Types } from "../action-mappers/t3-action-mapper";

const initialState:IT3State = {
    //remember to spread board into a new array
    board:[
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ],
    inProgress:true,
    whoTurns:false,
    winner:''
}

export const t3Reducer = (state= initialState, action:AnyAction) => {
    switch (action.type) {
        case t3Types.CELL_CLICK:{
            if(!state.inProgress){
                return state
            }
            let {x,y} = action.payload
            if(state.board[x][y] !== ' '){
                return state
            }
            let newBoard
            if(state.whoTurns){
                newBoard = makeBoard(state.board, x, y, 'O' )
            }else {
                newBoard = makeBoard(state.board, x, y, 'X' )
            }
            let winner = checkWinner(newBoard)
            if(!winner){
                return {
                    ...state,
                    board:newBoard,
                    whoTurns: !state.whoTurns
                }
            }else {
                return {
                    ...state,
                    inProgress:false,
                    board: newBoard,
                    winner: winner + ' is the winner'
                }
            }
            
        }
        case t3Types.RESET_GAME:{
            return initialState
        }
        default:
            return state;
    }
}

const makeBoard = (board:string[][], x:number,y:number, char:string) => {
    let newBoard = [
        [...board[0]],
        [...board[1]],
        [...board[2]]
    ]
    newBoard[x][y] = char
    return newBoard 
}

const checkWinner = (board: string[][]) => {
    //all horizontals
    let res = ''

    for (const row of board) {
        if ((row[0] === row[1]) && (row[0] === row[2]) && row[0] !== ' ') {
            res = row[0]
        }
    }
    if (!res) {
        res = board[0].reduce((total, cell, index) => {
            if ((cell === board[1][index]) && (cell === board[2][index]) && cell !== ' ') {
                return total + cell
            } else {
                return total + ''
            }
        }, '')
    }
    if (((board[0][0] === board[1][1] && board[0][0] === board[2][2])
        || (board[2][0] === board[1][1] && board[2][0] === board[0][2]))
        && board[1][1] !== ' ') {
        res = board[1][1]
    }


    if(!res){
        res = 'No one'
        for (const row of board) {
            if(row[0] === ' ' || row[1] === ' ' || row[2] === ' '){
                res = ''//not full
            }
        }
    }

    return res// '' 'Xchar' 'Ochar' 'No One'
}