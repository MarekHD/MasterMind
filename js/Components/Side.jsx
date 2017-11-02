import React from 'react';
import {Colors} from './Colors.jsx';
import {Rules} from './Rules.jsx';


class Side extends React.Component {
    render() {
        return  <div className="side">
                    <Colors {...this.props}/>
                    <Rules />
                </div>
    }
}
export {Side}