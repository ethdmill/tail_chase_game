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
        flavorText: 'Your turn!'
      }


  }

  answerCheck = (answer) => {


    let previousAnswer = (this.state.previousAnswer)
    let previousAnswerLastIndex = previousAnswer.length - 1
    // console.log(answer[0])
    // console.log(previousAnswer[previousAnswerLastIndex])

    // if (answer.includes('THE ') || answer.includes('AN ') || (answer[0] === 'A' && answer[1] === ' ')) {

    // this code is broken for now but will be fixed soon

    if (answer[0] === previousAnswer[previousAnswerLastIndex] || previousAnswer === '') {

      console.log("this code works!")
      this.setState({ previousAnswer: answer,
                      alreadyGuessed: [...this.state.alreadyGuessed, answer],
                      flavorText: "Nice one!",
                    })
    } else if (answer.includes('THE ', 0)) {
      console.log("okay so this code works")

    }






    else {
      console.log("try again, idiot!")
    }

    console.log(answer)
    console.log(this.state.previousAnswer)






  }


  render() {

    return(
      <div>





        <div>{this.state.category}</div>


        <div><Form answerCheck={this.answerCheck} /></div>

        <div>{this.state.flavorText}</div>

        <div>{this.state.alreadyGuessed}</div>

      </div>


    )


  }


}

export default SinglePlayer
