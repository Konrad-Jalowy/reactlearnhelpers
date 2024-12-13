import { AddTitle } from "./ui/AddTitle";

function TitleRFC({title, setTitle}){
    function onTitleChange(e){
        setTitle(e.target.value);
    }
    return (
        <>
        <AddTitle/>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={onTitleChange} value={title} />
        </>
    );
};

export {TitleRFC};