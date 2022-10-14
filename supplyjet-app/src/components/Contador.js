import React, { useState} from "react";
import {productos} from './Productos';
/*
import React, { useState, useReducer } from "react";
*/

let stock = 10;

const Contador = () => {
    const [counter, setCounter] = useState(0);

    const controlarValores = (valor) => {
        if (valor < 0) {
            return 0;
        }
        if (valor > stock){
            return stock;
        }
        setCounter(valor);
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

            <div className="counter">
                <div
                    className="value-button"
                    id ="decrease"
                    onClick= {() => {
                        controlarValores(counter - 1);
                    }}
                >
                    -
                </div>
                <input type="text" id="number" value={counter} onChange={Contador}/>
                <div
                    className="value-button"
                    id ="increase"
                    onClick= {() => {
                        controlarValores(counter + 1);
                    }}
                >
                    +
                </div>
            </div>
        </>
    );
};

export default Contador;