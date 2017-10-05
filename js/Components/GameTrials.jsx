import React from 'react';



class GameTrials extends React.Component {
    render() {
        return  <div className="game-trials">
                    <h2>{ 10 - this.props.trials } TRIALS LEFT</h2>
                </div>
    }
}
export {GameTrials}