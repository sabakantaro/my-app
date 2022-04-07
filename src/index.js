import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(){
        super();
        this.state = {
            value: 0,
        };
    }
    render() {
    return (
        <button
            className="square"
            onClick={() => this.setState({value: 'H'})}>
        {this.state.value}
        </button>
    );
    }
}

class Board extends React.Component {
    renderSquare(i) {
    return <Square value={i + 5} />;
    }

    render() {
    const status = 'あなたの脳内';

    return (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
        </div>
    );
    }
}

class Game extends React.Component {
    render() {
    return (
        <div className="game">
        <div className="game-board">
            <Board />
        </div>
        <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
        </div>
    );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
