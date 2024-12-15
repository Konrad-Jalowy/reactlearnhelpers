function SetupFormContent({ data, handleChange, max }){
    const content = (
    <>
    
         <div className="row">
         <input type="checkbox" name="shuffle" checked={data.shuffle} onChange={handleChange}/>
         <label htmlFor="shuffle">Shuffle</label>
         </div>
        <div className="row">
        <input type="checkbox" name="wordsFirst" checked={data.wordsFirst} onChange={handleChange}/>
        <label htmlFor="wordsFirst">Words First</label>
        </div>
        <div className="row">
        <label htmlFor="take">Take:</label>
        <input type="number" name="take" min="1" value={data.take} max={max} onChange={handleChange} />
        </div>
        

    </>
);

    return content;
};

export {SetupFormContent};