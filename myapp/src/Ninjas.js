import React, {Component} from 'react';

class Ninjas extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const ninjaList = this.props.ninjas.map(ninja => {
      const ninjaListStyle = {marginBottom: '5px', borderBottom: '1px solid'};

      if (ninja.age > 20)
        return (
          <div key={ninja.id} style={ninjaListStyle} className='Ninjas'>
            <div>ID: {ninja.id}</div>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <button onClick={ () => this.props.deleteNynja(ninja.id) }>X</button>
          </div>
        );
      else
        return null;
    });

    return(
      <div className='ninja-list'>
        { ninjaList }
      </div>
    );
  }
}

export default Ninjas;
