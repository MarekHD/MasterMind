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
        if(nextProps.shouldRenderHistory === true ) {
            let colorsArr = nextProps.filledRow;
            let tempHistoryList = this.state.historyList.slice();
            tempHistoryList.push(colorsArr)
            this.setState({
                historyList: tempHistoryList
            })
            this.props.resetShouldRender();
        }
    }
    componentDidUpdate() {
        
    }
    render() {
        let historyRows;
            historyRows = this.state.historyList.map( (elem, i) => {
                return <RowHistory
                        key={i}
                        filledRow={this.props.filledRow} 
                        code={this.props.code}
                        pegListColor={this.props.pegListColor}
                        trials={this.props.trials}
                        historyList={this.state.historyList}
                        index={this.state.historyList[i]}
                        />
            })
        return  <div className="history">
                    {historyRows}
                </div>
    }
}
export {History}