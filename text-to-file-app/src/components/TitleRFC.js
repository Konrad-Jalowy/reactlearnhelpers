import { AddTitle } from "./ui/AddTitle";
import { FormRow } from "./ui/FormRow";
function TitleRFC({title, setTitle}){
    function onTitleChange(e){
        setTitle(e.target.value);
    }
    return (
        <>
        <AddTitle/>
        <FormRow>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={onTitleChange} value={title} />
        </FormRow>
        </>
    );
};

export {TitleRFC};