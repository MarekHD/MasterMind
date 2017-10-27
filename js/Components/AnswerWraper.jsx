import React from 'react';

class AnswerWraper extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let hint; // to co bedzie przekazywane do className po porownaniu indexu z codem

    }




    render() {
        const dots = [0,1,2,3];
        const dotsList = dots.map((elem, i)=>{
            return <div key={i} order={elem} className="dot "></div>
        })
        return  <div className="answer-wraper">
                    {dotsList}
                </div>
    }
}
export {AnswerWraper}