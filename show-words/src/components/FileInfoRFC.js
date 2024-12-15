function FileInfoRFC({title, words}){
    
    return (
        <>
        <p>Make sure thats the file and accept:</p>
        <p>Title: {title}</p>
        <p>Words: {words.length}</p>
        </>
    );
};

export default FileInfoRFC;