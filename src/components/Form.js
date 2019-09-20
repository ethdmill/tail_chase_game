import React, { Component } from 'react'


class Form extends Component {

  constructor() {
    super()
    this.state = {
      answer: '',
    }
  }

  // Sets state of answer to any text input in form field
  handleChange = event => {
    this.setState({ answer: event.target.value })
  }

  // Creates answer variable and runs main game functions upon submitting text
  handleSubmit = event => {
    event.preventDefault()
    this.setState({ answer: '' })
    let answer = (this.state.answer).toUpperCase()
    this.props.articleCheck(answer)
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
          <div className="pt-2 mb-2">
            <button type="submit" value="Submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Form
