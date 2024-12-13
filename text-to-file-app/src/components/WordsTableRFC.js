
import {WordsRow} from './WordsRowRFC';
function WordsTableRFC({words, qty}){
    return (
        <>
        <table>
        <caption>
            Your words
        </caption>
        <thead>
            <tr>
            <th scope="col">Word</th>
            <th scope="col">Meaning</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
        {words.map((wordItem) => {
                return <WordsRow key={Math.random()} word={wordItem} />
            })}
        </tbody>
        <tfoot>
            <tr>
            <th scope="row" colSpan="2">Words total:</th>
            <td>{qty}</td>
            </tr>
        </tfoot>
        </table>
        </>
    );
};

export {WordsTableRFC};