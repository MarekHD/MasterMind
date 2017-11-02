import React from 'react';



class Rules extends React.Component {
    render() {
        return  <div className="rules">
                    <h2>RULES</h2>
                    <br/>
                    <span>Try to guess the circle pattern, in both order and color, within 10 turns. After submitting a row, a small green peg is placed for each code peg from the guess which is correct in both color and position. A lightblue peg indicates the existence of a correct color code peg placed in the wrong position. More info on <a target="blank" href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">Wikipedia</a>.</span>
                </div>
    }
}
export {Rules}