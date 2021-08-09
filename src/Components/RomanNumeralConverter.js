import React, { useState } from "react";
import "./MedianFinder.css";
import toRoman from "../Algorithms/RomanNumeralConverter";

const RomanNumeralConverter = () => {
    const [intInput, setIntInput] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [output, setOutput] = useState(0);

    return (
        <div className="container">
            <h3 className="info">
                Provide an integer to get converted to a Roman Numeral.
            </h3>

            <ul>
                <li>Has to be a positive integer</li>
                <li>Less than 10,000</li>
            </ul>

            <div className="error-div">
                <text
                    className="output-text"
                    style={{ color: "red", textAlign: "center" }}
                >
                    {errorMessage}
                </text>
            </div>

            <div className="input-row">
                <form autoComplete='off'>
                <label className="labelA">
                    Provide an Integer:
                    <input
                        type="text"
                        name="integerToRoman"
                        value={intInput}
                        onChange={(e) => setIntInput(e.target.value)}
                    />
                </label>
                </form>
            </div>

            <div className="submit-container">
                <input
                type="submit"
                value="Convert to Roman"
                className="submit"

                onClick={() => {
                    if (Number(intInput) !== NaN && intInput > 0 && intInput < 10000){
                        setOutput(toRoman(parseInt(intInput)));
                        setErrorMessage("");
                    }
                    else {
                        setErrorMessage(
                            "Make sure you have provided a positive integer less than 10,000!"
                        );
                    }
                }}
                />
            </div>

            <div className="output-div">
                <div className="output-div-column">
                <text>Output:</text>
                <text className="output-text">{output}</text>
                </div>
            </div>
        </div>
    );
};

export default RomanNumeralConverter;