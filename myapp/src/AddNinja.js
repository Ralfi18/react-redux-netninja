import React, {Component} from 'react';

class AddNinja extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: null,
      age: null,
      belt: null
    };
  }

  handleChage = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    this.props.addNinja(this.state);

    event.preventDefault();
  }

  render(){
    return(
      <div className='add-ninja'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name' >Name:</label>
          <input type='text' id='name' onChange={this.handleChage}/>

          <label htmlFor='age' >Age:</label>
          <input type='text' id='age' onChange={this.handleChage}/>

          <label htmlFor='belt' >Belt:</label>
          <input type='text' id='belt' onChange={this.handleChage}/>

          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
