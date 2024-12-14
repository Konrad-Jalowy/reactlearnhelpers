import { useState } from "react";

function SetupForm({title, words}){
    const [_state, setState] = useState({
        shuffle: false, 
        wordsFirst: true,
        take: words.length
    });
    return (
        <>
        <p>Not implemented (setup form)</p>
        </>
    );
};

export {SetupForm};