
import {WordsRow} from './WordsRowRFC';
function WordsTableRFC({words, qty, deleteWord, title}){
    return (
        <>
        <table>
        <caption>Title: {title}</caption>
        <thead>
            <tr>
            <th scope="col">Word</th>
            <th scope="col">Meaning</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
        {words.map((wordItem) => {
                return <WordsRow key={wordItem._key} word={wordItem} deleteWord={deleteWord} />
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