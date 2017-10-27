import React from 'react';


class KeyWraperHistory extends React.Component {
    constructor(props){
        super(props);
        
    }
    

    render() {
        console.log('TUTUTUTU',this.props.index)
        const pegs = [0,1,2,3];
        let pegList = [];
            pegList = pegs.map((elem, i)=>{
                return <div 
                            data-id={i}  
                            key={i} 
                            className="peg" 
                            id={this.props.index[i]}>
                        </div>
            })
        return  <div className="key-wraper">
                        {pegList}
                    </div>
    }
}
export {KeyWraperHistory}