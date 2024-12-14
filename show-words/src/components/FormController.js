import { useState } from "react";

function FormController(){
    const [formMode, setFormMode] = useState('notAccepted');
    const [title, setTitle] = useState('');
    const [words, setWords] = useState([]);

    return (
        <>
        <p>Not implemented(form controller)</p>
        </>
    );
};

export {FormController};