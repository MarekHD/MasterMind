import React from 'react';


//Mapa elementow z kolorem

class ColorsSectionWraper extends React.Component {
    render() {
            const colorList = this.props.colors.map((elem, i)=>{
                return <div 
                            onClick={this.props.takeClick} 
                            key={i} 
                            className="selected" 
                            id={elem}>
                        </div>
            })
        return  <div className="color-selection-wraper">
                    {colorList}
                </div>
    }
}
export {ColorsSectionWraper}