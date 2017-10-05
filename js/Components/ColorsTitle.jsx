import React from 'react';



class ColorsTitle extends React.Component {
    render() {
        return  <div onClick={this.props.resetRow} className="color-title">
                    <h2>Choose Color:</h2>
                </div>
    }
}
export {ColorsTitle}
