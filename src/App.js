import React from 'react';
import './App.css';
import NumPadComponent from './components/NumPadComponent'
import CalcScreen from './components/CalcScreen';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

  }
  render() {
    return (
      <div>
        <CalcScreen />
        <NumPadComponent />
      </div >
    )
  }
}

export default App;