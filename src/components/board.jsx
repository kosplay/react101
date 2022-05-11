import React, { Component } from 'react';
import './board.css';
class Board extends Component {
  state = {
    stack: [],
    boxes: [
      {id: 0, clicked: false},
      {id: 1, clicked: false},
      {id: 2, clicked: false},
      {id: 3, clicked: false},
      {id: 4, clicked: false},
      {id: 5, clicked: false},
      {id: 6, clicked: false},
      {id: 7, clicked: false},
      {id: 8, clicked: false},
    ]
  }

  handleClick(box) {
    if (box.id === 5 || box.id === 4 || box.clicked) {
      return
    }
    const boxes = [...this.state.boxes]
    boxes[box.id].clicked = true
    const stack = [...this.state.stack]
    stack.push(boxes[box.id])
    this.setState({stack, boxes})
  }

  componentDidUpdate() {
    if (this.state.stack.length === 7) {
      this.rewind()
    }
  }

  rewind() {
    // console.log(this.state)
    const intervalID = setInterval(() => {
      const stack = [...this.state.stack]
      if (stack.length === 0) {
        clearInterval(intervalID)
      } else {
        const boxes = [...this.state.boxes]
        const popBox = stack.pop()
        boxes[popBox.id] = {...popBox}
        boxes[popBox.id].clicked = false
        this.setState({stack, boxes})
      }
    }, 1000);
  }

  render() {
    // console.log(this.state)
    return (
      <div id="board">
        {this.state.boxes.map(b => <div box={b} key={b.id} onClick={() => this.handleClick(b)}
          className={'box ' + (b.id === 5 || b.id === 4 ? ' hidden' : '') + (b.clicked ? ' clicked' : '')}></div>)}
      </div>
    );
  }
}

export default Board;