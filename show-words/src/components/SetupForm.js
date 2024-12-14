import { useState } from "react";
import { SetupFormContent } from "./SetupFormContent";
import { useAppDispatch } from "../context/appcontext";
function SetupForm({title, words}){

    const dispatch = useAppDispatch();

    const [_state, setState] = useState({
        shuffle: false, 
        wordsFirst: true,
        take: words.length
    });

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(_state))
        const payload = {
            title: title,
            words: words,
            shuffle: _state.shuffle,
            wordsFirst: _state.wordsFirst,
            take: _state.take
        };
        
        dispatch({type: 'prepare', payload: payload});
    }

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setState(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    return (
        <>
        <p>Not implemented (setup form)</p>
        <form onSubmit={handleSubmit}>
        <SetupFormContent data={_state} max={words.length} handleChange={handleChange}/>
        <button>Accept</button>
        </form>
        </>
    );
};

export {SetupForm};