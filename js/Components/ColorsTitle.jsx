import React from 'react';



class ColorsTitle extends React.Component {
    render() {
        return  <div onClick={this.props.resetRow} className="color-title">
                    <h2>Click on color to choose:</h2>
                </div>
    }
}
export {ColorsTitle}
