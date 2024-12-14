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

function objIsCorrect(obj){
    if(!Object.hasOwn(obj, 'title')){
        console.log("no title")
        return false;
       
    }
    if(typeof obj.title !== 'string'){
        console.log("title not string")
        return false;
    }
    if(obj.title.trim() === ""){
        console.log("title empty");
        return false;
    }

    if(!Object.hasOwn(obj, 'words')){
        console.log("no words");
        return false;
    }
    if(!Array.isArray(obj.words)){
        console.log("words not an array");
        return false;
    }
    if(obj.words.length === 0){
        console.log("words are empty");
        return false;
    }
    
    let allItemsCorrect = true
    
    for(const wordItem of obj.words){
        if(wordItemCorrect(wordItem)){
            continue;
        }
        allItemsCorrect = false;
        break;
    }
    return allItemsCorrect;
};

export {objIsCorrect};