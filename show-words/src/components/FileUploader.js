import { useState, useRef } from "react";
import { objIsCorrect } from "../utils/objIsCorrect";
import FileInfoRFC from "./FileInfoRFC";
function FileUploader({onAccept}){

    const inputFileRef = useRef(null);
    const wordsRef = useRef(null);
    
    const [uploaderMode, setUploaderMode] = useState('fileNull');

    function readUploadedFile(file){
        if(file === null)
            return;
        
        let reader = new FileReader()

        reader.readAsText(file);
        //todo - finish it
    }

    
    function onChangeHandler(e){
        if(e.target.files){
            readUploadedFile(e.target.files[0]);
        }
    }

    function onResetHandler(){
        setUploaderMode('fileNull');
    }

    function onAcceptHandler(){
        let title = wordsRef.current.title;
        let words = wordsRef.current.words;
        onAccept(title, words);
    }
   
    return (
        <>
        <p>Not implemented(file uploader)</p>
        {uploaderMode === 'fileNull' && (
            <>
            <input 
            ref={inputFileRef} 
            type="file" 
            accept="application/json" 
            onChange={onChangeHandler}/>
            </>
        )}
        {uploaderMode === 'fileNotNull' && (
            <>
            <FileInfoRFC title={wordsRef.current.title} dates={wordsRef.current.words} />
            <button onClick={onResetHandler}>Reset</button>
            <button onClick={onAcceptHandler}>Accept</button>
            </>
        )}
        </>
    );
};

export {FileUploader};