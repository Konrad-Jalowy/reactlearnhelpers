import { FormController } from "./FormController";
import { WordsContainerController } from "./WordsContainerController";
import { useAppWithDispatch } from "../context/appcontext";
function Mainloop(){
    const [{loopMode}, dispatch] = useAppWithDispatch();
    return (
        <>
        <p>Not implemented(mainloop)</p>
        <button onClick={() => dispatch({type: 'setLoopMode', payload: 'started'})}>Fake send file</button>
        {loopMode === 'fileNotSent' && <FormController/>}
        {loopMode === 'started' && <WordsContainerController/>}
        </>
    );
};

export {Mainloop};