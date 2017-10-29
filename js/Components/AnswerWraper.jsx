import React from 'react';

class AnswerWraper extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render() {
        //mecze finalDivison
        finalDivision = (element)=>{
            arrayAnswerFilter = guessPigCorrect.filter((element)=>{
                element === this.
            })

        }
        
        let greenCounter = 0
        let semiCounter = 0
        console.log('TU PRZYCHODZI KOD DO SPRAWDZENIA',this.props.code)
        let guessPig = this.props.index.slice();
        console.log('HINT',guessPig) // to co bedzie przekazywane do className po porownaniu indexu z codem
        let guessPigCorrect = guessPig.map((elem, i)=>{
            if (elem === this.props.code[i]) {
                greenCounter++;
                return 'dot-correct'
            } else return elem //pozniej zrobie z tego kolor, zeby przepuszczal do kolejnego sprawdzania
        })
        //Nie wiem czy tu ma być ten finalDivision
        let gPcorrectPlusSemi = guessPigCorrect.map((elem, i)=>{
            return finalDivision(elem)
        })

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