function TitleRFC({title, setTitle}){
    function onTitleChange(e){
        setTitle(e.target.value);
    }
    return (
        <>
        <p>Title: {title}</p>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={onTitleChange} value={title} />
        </>
    );
};

export {TitleRFC};