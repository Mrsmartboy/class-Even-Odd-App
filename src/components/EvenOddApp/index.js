import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onClickIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    const mode = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="header">Count {number}</h1>
          <p className="para1">Count is {mode}</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickIncrement}
          >
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
