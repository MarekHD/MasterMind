import React from 'react';
import {GameTrials} from './GameTrials.jsx';
import {Row} from './Row.jsx';
import {History} from './History.jsx';


class Game extends React.Component {
    
    render() {
        
        return  <div className="game">
                    <GameTrials trials={this.props.trials} />
                    <Row {...this.props} 
                        filledRow={this.props.filledRow}
                        />
                    <History 
                        filledRow={this.props.filledRow} 
                        reset={this.props.reset}
                        shouldRenderHistory={this.props.shouldRenderHistory}
                        code={this.props.code} 
                        trials={this.props.trials}/>
                </div>
    }
}
export {Game}