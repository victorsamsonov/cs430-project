import React, {useReducer, useEffect, useState} from 'react';
import './Example.css'

const Example = ({array})=>{


    const renderCells = (array)=>{
        let output = []
        for (let element of array){
            output.push(<text>{element}</text>)
        }
       return (<div className="cell">
           {output}
       </div>)
    }

    return(
        <div className='example-container'>
            {renderCells(array)}  
        </div>
    )


}

export default Example

