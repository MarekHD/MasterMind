import React from 'react';

class KeyWraper extends React.Component {
    constructor(props){
        super(props);
        this.state={
            wraperColor: ["color99", "color99","color99","color99"],
            
        }
    }

    componentWillReceiveProps(nextProps) {
        let number = nextProps.number;
        if(number != null ){
            let arrColor = this.state.wraperColor.slice();
            arrColor[number] = nextProps.mainColor
            this.setState({
                wraperColor :arrColor
            })
        }  
    }
    //sendPegs uruchamia funkcje check
    sendPegs = (event) => {
        this.props.check(this.state.wraperColor);
        //nie dziala mi setState
        this.setState({
            wraperColor: ["color99", "color99","color99","color99"]
        })
        
    }
    componentDidMount(){
        console.log('ZMIANA',this.state.wraperColor)    
    }
    render() { 
        
        const pegs = [0,1,2,3];
        let pegList = [];
            pegList = pegs.map((elem, i)=>{
                return <div 
                            onClick={this.props.giveClick} 
                            data-id={i}  
                            key={i} 
                            className="peg" 
                            id={this.state.wraperColor[i]}>
                        </div>
                        
            })
            
        //region Blokowanie przycisku CHECK!    
        let disabled = this.props.btnDisable;
        console.log(disabled)
        if (disabled == false){
            disabled = true
        } else
        if (this.state.wraperColor.indexOf("color99")=== -1){console.log('zmiana dla dostepny przycisk'); disabled = false;}
        //endregion
        return  <div className="row">
                    <div className="key-wraper">
                        {pegList}
                    </div>
                    <div className="check">
                        <button disabled={disabled} onClick={this.sendPegs} className="check button">
                            CHECK
                        </button>
                    </div>
                </div>
    }
}
export {KeyWraper}