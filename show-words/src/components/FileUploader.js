import { useState, useRef } from "react";
import { objIsCorrect } from "../utils/objIsCorrect";
function FileUploader(){

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
   
    return (
        <>
        <p>Not implemented(file uploader)</p>
        </>
    );
};

export {FileUploader};