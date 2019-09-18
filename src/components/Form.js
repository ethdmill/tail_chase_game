import React, { Component } from 'react'


class Form extends Component {

  constructor() {
    super()
    this.state = {
      answer: '',
    }
  }

  handleChange = event => {
    this.setState({ answer: event.target.value })
  }




  handleSubmit = event => {
    event.preventDefault()
    this.setState({ answer: '' })
    let answer = (this.state.answer).toUpperCase()
    this.props.answerCheck(answer)
  }





  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mt-2 pb-1">
            <input
              type="text"
              id="answerInput"
              placeholder="Type your answer here!"
              value={this.state.answer}
              onChange={this.handleChange}
            />
          </div>
          {/* submit button disabling thing goes here */}
        </form>
      </div>
    )
  }

}

export default Form
