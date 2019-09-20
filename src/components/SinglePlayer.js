import React, { Component } from 'react'
import { randomCategory } from './Categories.js'
import Form from './Form.js'


class SinglePlayer extends Component {

  constructor() {
    super()
      this.state = {
        category: randomCategory(),
        previousAnswer: '',
        correct: true,
        alreadyGuessed: [],
        flavorText: 'Your turn!',
        articleText: '',
        hasArticle: false,
      }
  }

  // Checks answer and stores object to be used as state later -- also stores previous answer to allow continual gameplay
  answerCheck = (answer, startIndex) => {
    let previousAnswer = (this.state.previousAnswer)
    let previousAnswerLastIndex = previousAnswer.length - 1
    let tempState = {}

    if (answer === '') {
      tempState = { flavorText: "Please enter an answer!" }
    } else if (this.state.alreadyGuessed.includes(answer)) {
      tempState = { flavorText: "That one was already guessed!" }
    } else if (answer[startIndex] === previousAnswer[previousAnswerLastIndex] || previousAnswer === '') {
      tempState = {
        previousAnswer: answer,
        correct: true,
        alreadyGuessed: [...this.state.alreadyGuessed, answer],
        flavorText: "Nice one!",
      }
    } else {
      tempState = {
        correct: false,
        flavorText: "Oops, try again!",
      }
    }

    return tempState
  }

  // Checks whether or not an incorrect answer contains an article -- if it does, reminder text displays
  articleTextCheck = (newState) => {
    if (!newState.correct && newState.hasArticle) {
      this.setState({ ...newState, articleText: "Remember, articles don't count!" })
    } else {
      this.setState({ ...newState, articleText: "" })
    }
  }

  // Determines answer index to start check at, and then runs answerCheck and articleTextCheck
  articleCheck = (answer) => {
    let newStart = 0
    let hasArticle = false

    if (answer.startsWith('THE ')) {
      newStart = 4
    } else if (answer.startsWith('AN ')) {
      newStart = 3
    } else if (answer.startsWith('A ')) {
      newStart = 2
    }

    if (newStart !== 0) {
      hasArticle = true
    }

    const newState = this.answerCheck(answer, newStart)
    newState.hasArticle = hasArticle
    this.articleTextCheck(newState)
  }


  render() {
    return(
      <div className='text-center'>
        <h2 className="pt-3">Tail Chase: Single-Player</h2>
        <h3 className="py-4 mt-3 mb-2">Category: {this.state.category}</h3>
        <div><Form articleCheck={this.articleCheck} /></div>
        <h5 className="py-3">{this.state.flavorText}</h5>
        <div>{this.state.articleText}</div>
        <h5 className="mt-1">{this.state.alreadyGuessed.join(" || ")}</h5>
      </div>
    )
  }

}

export default SinglePlayer
