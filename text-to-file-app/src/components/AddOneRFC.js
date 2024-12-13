import { useRef } from "react";
function getKey(key){
    return `single-${key}`;
}
function AddOneRFC({setWords}){
    const keyRef = useRef(1);
    const wordRef = useRef(null);
    const meaningRef = useRef(null);

    function addWordHandler(e){
        let _key = getKey(keyRef.current);
        keyRef.current++;
        let _word = wordRef.current.value;
        let _meaning = meaningRef.current.value;
        let newItem = {
            word: _word, meaning: _meaning, _key
        };
        setWords(prev => [...prev, newItem]);
    }
    return (
        <>
        <label htmlFor="word">Word</label>
        <input type="text" name="word" id="word" ref={wordRef}/>
        <label htmlFor="meaning">Meaning</label>
        <input type="text" name="meaning" id="meaning" ref={meaningRef}/>
        <button onClick={addWordHandler}>Add Word</button>
        </>
    );
};

export {AddOneRFC};