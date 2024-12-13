function TitleRFC({title, setTitle}){
    return (
        <>
        <p>Title: {title}</p>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={onTitleChange} value={title} />
        </>
    );
};

export {TitleRFC};