import { FormController } from "./FormController";
import { WordsContainerController } from "./WordsContainerController";
import { useAppWithDispatch } from "../context/appcontext";
function Mainloop(){
    const [{loopMode}, dispatch] = useAppWithDispatch();
    return (
        <>
        {loopMode === 'fileNotSent' && <FormController/>}
        {loopMode === 'started' && <WordsContainerController/>}
        </>
    );
};

export {Mainloop};