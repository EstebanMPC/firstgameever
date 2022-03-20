import React from 'react'; 
import '../App.css';


function GameComponent () {

    return (
        <div id="container" className="center number" >  
            <div id='gameBoard'>
                <div>
                    <div className="numberBox boxOne red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
                <div>
                    <div className="numberBox boxTwo red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
                <div>
                    <div className="numberBox boxThree red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
                <div>
                    <div className="numberBox boxFour red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
                <div>
                    <div className="numberBox boxFive red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
                <div>
                    <div className="numberBox boxSix red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
                <div>
                    <div className="numberBox boxSeven red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
                <div>
                    <div className="numberBox boxEight red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
                <div>
                    <div className="numberBox boxNine red">
                        <input className="number" maxlength="2"></input>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GameComponent;