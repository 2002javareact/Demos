import React from 'react'
import { Table, Button } from 'reactstrap'

interface IT3Props {
    board: string[][]
    winner: string
    cellClickActionMapper: (x: number, y: number) => void
    resetGameActionMapper: () => void
}


export class T3Component extends React.Component<IT3Props, any>{

    cellClick = (x: number, y: number) => {
        this.props.cellClickActionMapper(x, y)
    }

    render() {
        return (
            <div>
                <Table>
                    <tr>
                        <td className='t3' onClick={() => this.cellClick(0, 0)}>{this.props.board[0][0]}</td>
                        <td className='t3' onClick={() => this.cellClick(0, 1)}>{this.props.board[0][1]}</td>
                        <td className='t3' onClick={() => this.cellClick(0, 2)}>{this.props.board[0][2]}</td>
                    </tr>
                    <tr>
                        <td className='t3' onClick={() => this.cellClick(1, 0)}>{this.props.board[1][0]}</td>
                        <td className='t3' onClick={() => this.cellClick(1, 1)}>{this.props.board[1][1]}</td>
                        <td className='t3' onClick={() => this.cellClick(1, 2)}>{this.props.board[1][2]}</td>
                    </tr>
                    <tr>
                        <td className='t3' onClick={() => this.cellClick(2, 0)}>{this.props.board[2][0]}</td>
                        <td className='t3' onClick={() => this.cellClick(2, 1)}>{this.props.board[2][1]}</td>
                        <td className='t3' onClick={() => this.cellClick(2, 2)}>{this.props.board[2][2]}</td>
                    </tr>
                </Table>
                <h3>{this.props.winner}</h3>
                <Button  onClick={this.props.resetGameActionMapper} color='primary'>New Game</Button>
            </div>
        )
    }
}