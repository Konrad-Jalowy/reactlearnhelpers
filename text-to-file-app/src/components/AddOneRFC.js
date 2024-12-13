import { useRef } from "react";
function getKey(key){
    return `single-${key}`;
}
function AddOneRFC({setWords}){
    const keyRef = useRef(1);
    const wordRef = useRef(null);
    const meaningRef = useRef(null);

    function addWordHandler(e){
        console.log("triggered");
    }
    return (
        <>
        <label htmlFor="word">Word</label>
        <input type="text" name="word" id="word"/>
        <label htmlFor="meaning">Meaning</label>
        <input type="text" name="meaning" id="meaning"/>
        <button onClick={addWordHandler}>Add Word</button>
        </>
    );
};

export {AddOneRFC};