function SetupFormContent({ data, handleChange, max }){
    const content = (
    <>
    <p>Not implemented setupformcontent</p>
    <input type="checkbox" name="shuffle" checked={data.shuffle}/>
        <label htmlFor="shuffle">Shuffle</label>
        <br/>
        <input type="checkbox" name="wordsFirst" checked={data.wordsFirst}/>
        <label htmlFor="datesFirsm">Dates First</label>
        <br/>
        <label htmlFor="take">Take:</label>
        <input type="number" name="take" min="1" value={data.take} max={max} />
        <br/>
    </>
);

    return content;
};

export {SetupFormContent};