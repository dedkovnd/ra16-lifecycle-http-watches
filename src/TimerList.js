import React from "react";

export function TimerList (props){
    return (
        <>
            {props.results.map((result,i)=>
                <div key={i}>
                <span className="model">{result.name}</span>
                <span className="model">{result.zone}</span>
                <span className="model" onClick = {(e)=>
                    props.deleteHandler(i)}>&times;</span>
                </div>)}
        </>
    )
}