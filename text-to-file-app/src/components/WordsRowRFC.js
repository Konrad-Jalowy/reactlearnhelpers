function WordsRow({word, deleteWord}){
    return (
        <>
        <tr>
            <td>{word.word}</td>
            <td>{word.meaning}</td>
            <td onClick={() => deleteWord(word._key)}>Delete word</td>
        </tr>
        </>
    )
};

export {WordsRow};