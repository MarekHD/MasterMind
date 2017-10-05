import React from 'react';
import {KeyWraperHistory} from './KeyWraperHistory.jsx';
import {AnswerWraper} from './AnswerWraper.jsx';


class RowHistory extends React.Component {
    render() {
        return  <div className="row">
                    <KeyWraperHistory filledRow={this.props.filledRow}/>
                    <AnswerWraper code={this.props.code}/>
                </div>
    }
}
export {RowHistory}