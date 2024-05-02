import React from "react";
import { separatorWord } from "../../pages/blog";

const BlogPost = (props) => {  
    let cleanedText;
    const separatorWordLength = separatorWord.length;

    if (props.text.charAt(0) === '\"') {
        // If the text string contains quotes, remove them by taking the substring starting from index 1 (opening quotation mark)
        // and continuing until 4 indices ("END321" (separator word) + closing quotation mark) before the end of the string
        cleanedText = props.text.substring(1, (props.text.length)- separatorWordLength - 1);
    } else {
        // Else, only remove the last 3 letters -- "END321" (separator word)
        cleanedText = props.text.substring(0, (props.text.length)- separatorWordLength);
    }

    return (
        <div>
            <div className="blogPost"><b>"{props.title}" by {props.author} {props.date}</b></div>
            
            <pre><div className="blogText">{cleanedText}</div></pre>
            <br />
            <br />

        </div>
    );
};
 
export default BlogPost;