import React from 'react';
import {KeyWraperHistory} from './KeyWraperHistory.jsx';
import {AnswerWraper} from './AnswerWraper.jsx';


class RowHistory extends React.Component {
    render() {
        return  <div className="row">
                    <KeyWraperHistory filledRow={this.props.filledRow}
                                    pegListColor={this.props.pegListColor}/>
                    <AnswerWraper code={this.props.code}/>
                </div>
    }
}
export {RowHistory}