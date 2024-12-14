import { useState } from "react";
import { SetupFormContent } from "./SetupFormContent";
function SetupForm({title, words}){
    const [_state, setState] = useState({
        shuffle: false, 
        wordsFirst: true,
        take: words.length
    });

    const handleSubmit = e => {
        e.preventDefault()
        console.log(JSON.stringify(_state))
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