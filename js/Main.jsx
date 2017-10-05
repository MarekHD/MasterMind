import React from 'react';
import {Title} from './Components/Title.jsx';
import {Board} from './Components/Board.jsx';

class Main extends React.Component {
    render() {
        return  <div className="container">
                    <Title />
                    <Board />
                </div>
        
    }
}
export {Main}