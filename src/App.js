import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';
import Game from './components/game';
class App extends Component {
  state = {
      counters: [
          {id: 1, value: 4},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0},
      ]
  }
  
  //hard code data. bad place and bad behavior
  data = {'Germany': 'Berlin',
    'Belgium': 'Brussels',
    'China': 'Beijing'
  }

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value=0
          return c
      })
      this.setState({counters})
  }

  handleIncrement = counter => {
      console.log(counter)
      const counters = [...this.state.counters]
      const index = counters.indexOf(counter)
      counters[index] = {...counter}
      counters[index].value++
      this.setState({counters})
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId)
      this.setState({counters})
      console.log('event handler called', counterId)
  }

  render() { 
    return (
    <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className='container'>
        <Game data={this.data} />
        <Counters onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete}
        counters={this.state.counters} />
      </main>
    </React.Fragment>
  );
  }
}

export default App;
