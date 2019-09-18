import React, { Component } from 'react'
import { randomCategory } from './Categories.js'
import Form from './Form.js'


class SinglePlayer extends Component {

  constructor() {
    super()
      this.state = {
        // status: playing,
        category: randomCategory(),
        previousAnswer: '',
        alreadyGuessed: [],
      }


  }

  answerCheck = (answer) => {


    let previousAnswer = (this.state.previousAnswer)
    if (answer[0] === previousAnswer[previousAnswer.length - 1] || previousAnswer === '') {
      console.log("this code works!")
    } else {
      console.log("try again, idiot!")
    }

    console.log(answer)
    console.log(this.state.previousAnswer)

    this.setState({ previousAnswer: answer })




  }


  render() {

    return(
      <div>





        <div>{this.state.category}</div>


        <div><Form answerCheck={this.answerCheck} /></div>


      </div>


    )


  }


}

export default SinglePlayer
