import React from 'react';
import {ColorsTitle} from './ColorsTitle.jsx';
import {ColorsSectionWraper} from './ColorsSectionWraper.jsx';


class Colors extends React.Component {
    render() {
        return  <div className="colors">
                    <ColorsTitle/>
                    <ColorsSectionWraper {...this.props}/>
                </div>
    }
}
export {Colors}