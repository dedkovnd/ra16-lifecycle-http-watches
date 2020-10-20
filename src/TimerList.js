import React, {useEffect, useState} from "react";
const moment = require('moment')
moment().format()

export function TimerList (props){
    const [date, setDate] = useState()

    useEffect(()=> {
        const intervalId = setInterval(()=> setDate(
            moment()
        ), 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <>
            {props.results.map((result,i)=>
                <div key={i}>
                <span className="model">{result.name}</span>
                <span className="model">{(date.utcOffset(result.zone)).format('HH:mm:ss')}</span>
                <span className="model" onClick = {(e)=>
                    props.deleteHandler(i)}>&times;</span>
                </div>)}
        </>
    )
}