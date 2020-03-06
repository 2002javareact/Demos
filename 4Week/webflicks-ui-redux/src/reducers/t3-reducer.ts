import {  IT3State } from ".";
import { AnyAction } from "redux";

const initialState:IT3State = {
    //remember to spread board into a new array
    board:[
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ],
    inProgress:false,
    whoTurns:false,
    winner:''
}

export const t3Reducer = (state= initialState, action:AnyAction) => {
    return state
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