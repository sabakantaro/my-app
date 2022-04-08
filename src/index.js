// import { React, useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.PureComponent {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }
// クラスから関数コンポーネントへ書き換え
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      whoIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice(); //sliceでsquaresの配列を分割して渡す
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.whoIsNext ? 'H' : '愛';
    this.setState({
      squares: squares,
      whoIsNext: !this.state.whoIsNext,
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = '強き煩悩：' + winner;
    } else {
      status = 'あなたの脳内：' + (this.state.whoIsNext ? 'H' : '愛');
    }

    return (
      <div>
        <div className="bonnou">最強の煩悩決定戦</div>
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

class Game extends React.PureComponent {
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

ReactDOM.render(<Game />, document.getElementById('root'));

// function AppWithCallbackAfterRender() {
//   useEffect(() => {
//     console.log('rendered');
//   });

//   return <Game />;
// }

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<AppWithCallbackAfterRender />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
