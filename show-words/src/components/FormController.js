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
        <p>Not implemented(form controller)</p>
        <button onClick={() => setFormMode('accepted')}>Fake accept file</button>
        {formMode === "notAccepted" && <FileUploader/>}
        {formMode === 'accepted' && <SetupForm/> }
        </>
    );
};

export {FormController};