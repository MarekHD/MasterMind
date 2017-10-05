import React from 'react';



class AnswerWraper extends React.Component {
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