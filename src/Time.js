import React from 'react';

class Time extends React.Component {
  state = {
      time : new Date().toLocaleString()
  } 

  constructor() {
    super();
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })}, 1000);
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
      <h1>{ this.state.time }</h1>
      </header>
    </div>
  );
  }

}

export default Time;
