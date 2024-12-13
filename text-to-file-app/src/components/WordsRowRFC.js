function WordsRow({word}){
    return (
        <>
        <tr>
            <td>{word.word}</td>
            <td>{word.meaning}</td>
            <td>Delete word</td>
        </tr>
        </>
    )
};

export {WordsRow};