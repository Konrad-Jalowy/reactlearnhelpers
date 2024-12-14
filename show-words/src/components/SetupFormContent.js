function SetupFormContent({ data, handleChange, max }){
    const content = (
    <>
    <p>Not implemented setupformcontent</p>
    <input type="checkbox" name="shuffle" checked={data.shuffle} onChange={handleChange}/>
        <label htmlFor="shuffle">Shuffle</label>
        <br/>
        <input type="checkbox" name="wordsFirst" checked={data.wordsFirst} onChange={handleChange}/>
        <label htmlFor="datesFirsm">Words First</label>
        <br/>
        <label htmlFor="take">Take:</label>
        <input type="number" name="take" min="1" value={data.take} max={max} onChange={handleChange} />
        <br/>
    </>
);

    return content;
};

export {SetupFormContent};