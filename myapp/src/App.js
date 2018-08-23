import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ninjas: [
        {name: 'Ryu', age: 30,belt: 'black', id: 1},
        {name: 'Yoshi', age: 20, belt: 'green', id: 2},
        {name: 'Bla', age: 25, belt: 'red', id: 3}
      ]
    };
  }

  addNinja = newNinja => {
    newNinja.id = Date.now();

    let ninjas = [...this.state.ninjas, newNinja];
    this.setState({ ninjas });
  }

  deleteNynja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })
    this.setState({ninjas});
  }

  render() {
    const { ninjas } = this.state;

    return (
      <div className="App">
        <h1>React App</h1>
        <Ninjas ninjas={ninjas} deleteNynja={this.deleteNynja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
