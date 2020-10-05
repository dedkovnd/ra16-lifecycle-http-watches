import React,{useState} from 'react';
import {TimerList} from "./TimerList";

export function Timer(props) {
    const [form, setForm] = useState({
        name: "",
        zone: ""
    })
    const [state, setState] = useState([])
    const submitHandler = evt => {
        evt.preventDefault()
        console.log("ffff")
        addResult({name: form.name, zone: form.zone})
        clearForm()
    }
    const clearForm = ()=> {
        setForm({name: "", zone: ""})
    }
    const addResult = (res) => {
        let newResult = state
        newResult.push(res)
        setState(newResult)
    }
    const deleteResult = (resIndex) => {
        let newResult = []
        state.forEach((elem, i) => {
            if(resIndex !== i) {
                newResult.push(elem)
            }
        })
        setState(newResult)
    }
    const nameHandler = evt => {
        evt.persist()
       setForm(prev => {
           return {
           ...prev,
           name: evt.target.value}
       })
    }
    const zoneHandler = evt => {
        evt.persist()
        setForm(prev => {
            return {
                ...prev,
                zone: evt.target.value}
        })
    }
    ///
    return (
        <>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Название</label>
            <input id="name" name="name" value={form.name} onChange={nameHandler}/>
            <label htmlFor="zone">Временная зона</label>
            <input id="zone" name="zone" value={form.zone} onChange={zoneHandler}/>
            <button type="submit">Добавить</button>
        </form>
            <TimerList results={state} deleteHandler={deleteResult}/>
        </>
    )
}