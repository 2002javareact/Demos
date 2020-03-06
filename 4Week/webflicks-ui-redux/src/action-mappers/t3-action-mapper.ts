
export const t3Types = {
    CELL_CLICK: 'T3_CELL_CLICK',
    RESET_GAME: 'T3_RESET_GAME'
}

export const cellClickActionMapper = (x:number, y:number) => {
    return {
        type:t3Types.CELL_CLICK,
        payload:{
            x,
            y
        }
    }
}


export const resetGameActionMapper = () => {
    return {
        type:t3Types.RESET_GAME
    }
}