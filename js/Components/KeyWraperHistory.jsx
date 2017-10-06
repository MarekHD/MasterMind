import React from 'react';


class KeyWraperHistory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pegListColor: ["color99", "color99","color99","color99"],
        }
    }
    

    render() {
            let tab = [];
        //Sprawdzam czy rzad juz zostal zmieniony czy jest to nowa odpowiedz
        if (this.state.pegListColor.indexOf("color99") == 0){
            let commingTable = this.props.filledRow;
            tab = this.state.pegListColor;
            if (commingTable){ tab = commingTable }  
        } else { tab = this.state.pegListColor }



        const pegs = [0,1,2,3];
        let pegList = [];
            pegList = pegs.map((elem, i)=>{
                return <div 
                            data-id={i}  
                            key={i} 
                            className="peg" 
                            id={tab[i]}>
                        </div>
            })
        return  <div className="key-wraper">
                        {pegList}
                    </div>
                    
                
    }
}
export {KeyWraperHistory}