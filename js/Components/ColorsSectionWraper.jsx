import React from 'react';


class ColorsSectionWraper extends React.Component {
    render() {
        console.log(this.props.colorClick)
            const colorList = this.props.colors.map((elem, i)=>{
                return <div 
                            onClick={this.props.takeClick} 
                            key={i} 
                            className={this.props.colorClick == elem ? "selected-ring" : "selected"} 
                            id={elem}>
                        </div>
            })
        return  <div className="color-selection-wraper">
                    {colorList}
                </div>
    }
}
export {ColorsSectionWraper}