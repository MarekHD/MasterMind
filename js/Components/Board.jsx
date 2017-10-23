import React from 'react';
import {Game} from './Game.jsx';
import {Side} from './Side.jsx';


class Board extends React.Component {
    constructor(props){
        super(props);
        this.state={
            colors : ['color0','color1','color2','color3','color4','color5'],
            code : [],
            mainColor : 'color99',
            number : null,
            filledRow : [],
            trials : 0,
            shouldRenderHistory: false,
            pegListColor: ["color99", "color99","color99","color99"],
            btnDisable : true
        }
        //Ustawienia poczatkowe
        this.mainColor = "color99";
        this.number = null;
    }
    takeClick = (event) => {
        this.mainColor = event.target.id;
    }
    giveClick = (event) => {
        this.number = event.target.dataset.id;
        this.setState({
            mainColor: this.mainColor,
            number: this.number,

        })
    }
    check = (data)=>{

        console.log("Odpalam metode check",data)
        this.setState({
            number : null,
            filledRow : data,
            trials : this.state.trials + 1,
            shouldRenderHistory: true,
        }) 
    }
    resetShouldRender =()=>{
        console.log("Odpalam metode resetRenderRRR")
        this.setState({
            shouldRenderHistory: false,
        })
    }
    //Sprawdzam dzialanie componentDidUpdate
    componentDidUpdate(){
        console.log("Sprawdzam dzialanie componentDidUpdate",this.state.filledRow)
    }
    //Nad resetem trzeba jeszcze poprawcować
    resetRow = () => {
        console.log("reset")
        this.setState({
            shouldRenderHistory: false,
            filledRow : [],
            pegListColor: ["color99", "color99","color99","color99"],
        })
    }
    componentDidMount(){//region Losowanie klucza code
        
        let code = [];
        for (var i = 0; i < 4; i++) {
            let index = Math.floor(Math.random()*6);
            code.push(this.state.colors[index]);
        }
        this.setState({code})
        //endregion
    }
    render() {
        console.log(this.state.filledRow, 'filledRow sprawdzam')
        return  <div className="board">
                    <Game 
                        resetShouldRender={this.resetShouldRender}
                        number={this.state.number} 
                        mainColor={this.state.mainColor} 
                        giveClick={this.giveClick}
                        check={this.check}
                        code={this.state.code}
                        trials={this.state.trials}
                        shouldRenderHistory={this.state.shouldRenderHistory}
                        filledRow={this.state.filledRow}
                        pegListColor={this.state.pegListColor}
                        btnDisable={this.state.btnDisable}/>
                    <Side {...this.state} takeClick={this.takeClick} resetRow={this.resetRow}/>
                </div>
    }
}
export {Board}