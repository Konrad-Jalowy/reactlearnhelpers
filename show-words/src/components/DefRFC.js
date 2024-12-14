import { forwardRef } from "react";
const DefRFC = forwardRef(function DefRFC({idx, words, wordsFirst}, ref){
    const defText = wordsFirst ? words[idx].meaning : words[idx].word;
    return (
        <p ref={ref} className="def-rfc ani-fadein">{defText}</p>
    )
});
export {DefRFC};