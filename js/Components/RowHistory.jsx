import React from 'react';
import {KeyWraperHistory} from './KeyWraperHistory.jsx';
import {AnswerWraper} from './AnswerWraper.jsx';


class RowHistory extends React.Component {
    render() {
        return  <div className="row">
                    <KeyWraperHistory filledRow={this.props.filledRow}
                                        pegListColor={this.props.pegListColor}
                                        historyList={this.props.historyList}
                                        index={this.props.index}/>
                    <AnswerWraper code={this.props.code}
                                    filledRow={this.props.filledRow}
                                    historyList={this.props.historyList}
                                    index={this.props.index}/>
                </div>
    }
}
export {RowHistory}