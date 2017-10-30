import React from 'react';

class AnswerWraper extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render() {
        let theSky = []
        let greenCounter = 0
        let semiCounter = 0
        let codeWorkingCopy = this.props.code.slice();
        let guessPig = this.props.index.slice();
        console.log('TU PRZYCHODZI KOD DO SPRAWDZENIA',codeWorkingCopy)
        console.log('TU SA NASZE BIERZACE ODPOWIEDZI',guessPig)
        
            for (var i = 0; i < 4; i++) {
                if (this.props.index[i] === this.props.code[i]) {
                    greenCounter++;
                    codeWorkingCopy[i] = 'codeDel';
                    guessPig[i] = 'pigDel'
                }   
            }
        console.log(codeWorkingCopy,'COS TU BEDZIE');
        console.log(guessPig,'NO i tu');
        console.log(greenCounter);
        
        
            for (var i = 0; i < 4; i++) {
                if(codeWorkingCopy.indexOf(guessPig[i])!=-1){
                    semiCounter++;
                    codeWorkingCopy[i] = 'codeDel';
                    guessPig[i] = 'pigDel'
                }
                
            }
        console.log(codeWorkingCopy,'COS TU BEDZIE2');
        console.log(guessPig,'NO i tu2');
        console.log(semiCounter);
            
            for (var i = 0; i < greenCounter; i++) {
                theSky.push('dot-correct')
            }
            for (var i = 0; i < semiCounter; i++) {
                theSky.push('dot-semigood')
            }
            let fillingNumber = 4 - theSky.length;
            for (var i = 0; i < fillingNumber; i++) {
                theSky.push('dot')
            }

        const dots = [0,1,2,3];
        const dotsList = dots.map((elem, i)=>{
            return <div key={i} order={elem} className={theSky[i]}></div>
        })
        return  <div className="answer-wraper">
                    {dotsList}
                </div>
    }
}
export {AnswerWraper}