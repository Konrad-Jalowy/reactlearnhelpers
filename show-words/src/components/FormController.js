import { useState } from "react";

function FormController(){
    const [formMode, setFormMode] = useState('notAccepted');
    const [title, setTitle] = useState('');
    const [words, setWords] = useState([]);

    function onAccept(_title, _words){
        setTitle(_title);
        setWords([..._words]);
        setFormMode('accepted');
    }

    return (
        <>
        <p>Not implemented(form controller)</p>
        </>
    );
};

export {FormController};