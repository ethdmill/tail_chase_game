import React, { Component } from 'react'


class Rules extends Component {

  render() {
    return (
      <div className="text-center">
        <h2 className="pt-5 my-5">DA RULES</h2>
        <ul className="list-group">
          <li className="my-1">Pick a category, either from the drop-down, the random button, or by manually entering one.</li>
          <li className="my-1">The first player is selected at random, and they type in a word that falls under the chosen category.</li>
          <li className="my-1">The next player has to enter an answer that begins with the last letter of the previous answer.</li>
          <li className="my-1">If you can't think of one in time, you're out!</li>
          <li className="my-1">Play continues until only one person remains.</li>
          <li className="my-1">However, the last person also has to think of a final answer! If they can't, they lose too!</li>
        </ul>
      </div>
    )
  }

}

export default Rules
