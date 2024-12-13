import { useRef } from "react";
function getKey(key){
    return `single-${key}`;
}
function AddOneRFC({setWords}){
    const keyRef = useRef(1);
    return (
        <>
        <label htmlFor="word">Word</label>
        <input type="text" name="word" id="word"/>
        <label htmlFor="meaning">Meaning</label>
        <input type="text" name="meaning" id="meaning"/>
        </>
    );
};

export {AddOneRFC};