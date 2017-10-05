import React from 'react';
import {KeyWraper} from './KeyWraper.jsx';


class Row extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        return  <div className="row">
                    <KeyWraper {...this.props} />
                </div>
    }
}
export {Row}