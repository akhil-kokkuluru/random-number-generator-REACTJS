import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  numberGeneration = () => {
    const random = Math.floor(Math.random() * 100)
    this.setState({number: random})
  }

  render() {
    const {number} = this.state
    return (
      <div className="gradBG">
        <h1 className="heading">Random Number</h1>
        <p className="para">
          Generate a random number in the range of 0 to 100
        </p>
        <button
          type="button"
          className="buttons"
          onClick={this.numberGeneration}
        >
          Generate
        </button>
        <div>
          <h1 className="heading">{number}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
