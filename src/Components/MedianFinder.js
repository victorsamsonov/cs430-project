import React, { useReducer, useEffect, useState } from "react";
import "./MedianFinder.css";
import Example from "./Example.js";
import FindMedian from "../Algorithms/FindMedian";

const ACTIONS = {
  SORTED: "sorted",
  NOT_SORTED: "notSorted",
};

const EXAMPLE1 = {
  A: [1, 3, 5, 7],
  B: [2, 4, 6, 8],
};

const EXAMPLE2 = {
  A: [2, 3, 6, 7, 8],
  B: [3, 6, 8, 11, 12],
};

const EXAMPLE3 = {
  A: [1, 2, 5, 11, 17, 22],
  B: [3, 4, 6, 8, 9, 10],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SORTED:
      document.getElementsByClassName("check-item")[0].style.backgroundColor =
        "rgba(41, 255, 191,.8)";
      return { isSorted: true };
    case ACTIONS.NOT_SORTED:
      document.getElementsByClassName("check-item")[0].style.backgroundColor =
        "rgba(255, 39, 39,.8)";
      return { isSorted: false };
  }
}

const MedianFinder = (props) => {
  const [arrayA, setArrayA] = useState([]);
  const [arrayB, setArrayB] = useState([]);
  const [arrayAInput, setArrayAInput] = useState([]);
  const [arrayBInput, setArrayBInput] = useState([]);
  const [output, setOutput] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    isSorted: true,
  });



  const handleArrayInput = (array, input) => {
    //remove all the white spaces from the input, and convert into an array
    let textArray = input.replace(/ /g, "").split(",");

    console.log(textArray);
    if (array === "A") {
      setArrayAInput(input);
      setArrayA(textArrayToIntArray(textArray));
    } else {
      setArrayBInput(input);
      setArrayB(textArrayToIntArray(textArray));
    }
  };

  const textArrayToIntArray = (array) => {
    let output = [];
    for (let t of array) {
      if (t !== "") output.push(parseInt(t));
    }

    return output;
  };

  const onExamplePress = (example) => {
    setArrayA(example.A);
    setArrayB(example.B);
  };

  function checkIfSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
  }

  useEffect(() => {
    if (arrayB.length === arrayA.length) dispatch({ type: "length" });
    else {
      dispatch({ type: "notSameLength" });
    }
    if (checkIfSorted(arrayA) === false || checkIfSorted(arrayB) === false)
      dispatch({ type: "notSorted" });
    else dispatch({ type: "sorted" });
  }, [arrayB, arrayA]);

  return (
    <div className="container">
      <h3 className="info">
        Click an Example or provide an Input (has to be sorted and of the same
        length)
      </h3>
     
        <div className="error-div">
          <text
            className="output-text"
            style={{ color: "red", textAlign: "center" }}
          >
            {errorMessage}
          </text>
        </div>
      )

      <div className="example-row">
        <a style={{flex:1}} onClick={() => onExamplePress(EXAMPLE1)}>
          <div className="example-cell" >
            <text>Example 1</text>
            <Example array={EXAMPLE1.A} />
            <Example array={EXAMPLE1.B} />
          </div>
        </a>

        <a style={{flex:1}} onClick={() => onExamplePress(EXAMPLE2)}>
          <div className="example-cell" >
            <text>Example 2</text>
            <Example array={EXAMPLE2.A} />
            <Example array={EXAMPLE2.B} />
          </div>
        </a>

        <a style={{flex:1}} onClick={() => onExamplePress(EXAMPLE3)}>
          <div className="example-cell" >
            <text>Example 3</text>
            <Example array={EXAMPLE3.A} />
            <Example array={EXAMPLE3.B} />
          </div>
        </a>
      </div>
      <div className="input-row">
        <form>
          <label className="labelA">
            Array A Input:
            <input
              type="text"
              name="A"
              value={arrayAInput}
              onChange={(e) => handleArrayInput("A", e.target.value)}
            />
            <text>Current Array A:</text>
            <div className="current-array-container">
              <Example array={arrayA} />
            </div>
          </label>
          <label className="labelB">
            Array B Input
            <input
              value={arrayBInput}
              type="text"
              name="B"
              value={arrayBInput}
              onChange={(e) => handleArrayInput("B", e.target.value)}
            />
            <text>Current Array B:</text>
            <div className="current-array-container">
              <Example array={arrayB} />
            </div>
          </label>
        </form>
      </div>
      <div className="submit-container">
        <input
          type="submit"
          value="Compute Median"
          className="submit"
          onClick={() => {
            if (state.isSorted){
              setOutput(FindMedian(arrayA, arrayB)); setErrorMessage("");
            }
            else {
              setErrorMessage(
                "Make Sure the arrays are sorted!"
              );
            }
          }}
        />
      </div>
      <div className="check">
        <div className="check-column">
          <text>Is Sorted?</text>
          <div id="check-item" className="check-item"></div>
        </div>

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

export default MedianFinder;
