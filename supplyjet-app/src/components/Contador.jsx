import React, {useState} from "react";

/*
import React, { useState, useReducer } from "react";
*/

const Contador = ({stock,initial}) => {
    const [counter, setCounter] = useState(0);
   
    const sumar = () => {
        if(counter<stock) {
            setCounter(counter+1)
        }
    };

    const restar = () => {
        if(counter>initial) {
            setCounter(counter-1)
        }
    };

    // const [counter2, valoresControl] = useReducer(controlarValores,0);

    return (
        <>    
            <h1
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Contador: {counter}
            </h1>

            <div className="counter-container">
                <div
                    className="counter-button"
                    id ="decrease"
                    onClick= {restar}
                >
                    -
                </div>
                <input type="text" id="number" value={counter} onChange={Contador}/>
                <div
                    className="counter-button"
                    id ="increase"
                    onClick= {sumar}
                >
                    +
                </div>
            </div>
        </>
    );
};

export default Contador;