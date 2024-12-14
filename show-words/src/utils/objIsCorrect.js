function wordItemCorrect(wordItem){
    if(!Object.hasOwn(wordItem, 'word')){
        return false;
    }
    if(!Object.hasOwn(wordItem, 'meaning')){
        return false;
    }
    if(typeof wordItem.word !== "string"){
        return false;
    }
    if(typeof wordItem.meaning !== "string"){
        return false;
    }
    return true;
}
