import React from 'react';
import {RowHistory} from './RowHistory.jsx';


class History extends React.Component {
    constructor(props){
        super(props);
        this.state={
            trials : this.props.trials,
            historyList : []
       }       
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps")
        if(nextProps.filledRow.length == 4 ) {
            let colorsArr = nextProps.filledRow;
            let tempHistoryList = this.state.historyList.slice();
            tempHistoryList.push(colorsArr)
            this.setState({
                historyList: tempHistoryList
            })
        }
    }
    render() {
        let historyRows;
        if(this.props.shouldRenderHistory === true){

            historyRows = this.state.historyList.map( (elem, i) => {
                return <RowHistory
                        key={i}
                        filledRow={this.props.filledRow} 
                        code={this.props.code} 
                        trials={this.props.trials}
                        />
            })
        } else {
             historyRows
        }
        return  <div className="history">
                    {historyRows}
                </div>
    }
}
export {History}