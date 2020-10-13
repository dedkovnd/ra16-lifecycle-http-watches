import React, {useEffect, useState} from "react";
const moment = require('moment')
moment().format()

export function TimerList (props){
    const [date, setDate] = useState({
        time: moment().format('HH:mm:ss'),
        zone: null
    })
    useEffect(()=> {
       setInterval(()=> setDate(prev => {
           return {
               ...prev,
               time: moment().format('HH:mm:ss')
           }
       }), 1000)
    }, [])

    return (
        <>
            {props.results.map((result,i)=>
                <div key={i}>
                <span className="model">{result.name}</span>
                <span className="model">{date.time}</span>
                <span className="model" onClick = {(e)=>
                    props.deleteHandler(i)}>&times;</span>
                </div>)}
        </>
    )
}