import React from 'react';
import './CounterDiv.css';


class CounterDiv extends React.Component {
  state = {
    counter: 0
  }
  
  increment = () => {
    this.setState({counter: this.state.counter+1});

  }

  decrement = () => {
    this.setState({counter: this.state.counter-1});
  }

  

  render() {
    
    return <div className='counter-div'>
    
      <button className='inc' onClick={this.increment}>++</button>
      <p>{this.state.counter===0 ? 'Zero' : this.state.counter}</p>
      <button className='dec' onClick={this.decrement}>--</button>
    
  
    </div>;
  }
}

export default CounterDiv;

