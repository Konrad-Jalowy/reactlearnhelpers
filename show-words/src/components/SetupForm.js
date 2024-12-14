import { useState } from "react";

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
        </>
    );
};

export {SetupForm};