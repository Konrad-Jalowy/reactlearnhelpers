import { useState } from "react";
import { FileUploader } from "./FileUploader";
import { SetupForm } from "./SetupForm";
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
        <h1 className="words-title">Words Guesser</h1>
        {formMode === "notAccepted" && <FileUploader onAccept={onAccept}/>}
        {formMode === 'accepted' && <SetupForm title={title} words={words}/> }
        </>
    );
};

export {FormController};