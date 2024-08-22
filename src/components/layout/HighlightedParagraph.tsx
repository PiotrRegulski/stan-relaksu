import React from 'react';

interface HighlightedParagraphProps{
    text:string;
    wordsToHighlight:string[];
    className:string;
}

const HighlightedParagraph:React.FC<HighlightedParagraphProps> = ({text,wordsToHighlight,className}) => {
    const getHighlightedText = (text: string, wordsToHighlight: string[]) => {
        const parts = text.split(new RegExp(`(${wordsToHighlight.join('|')})`, 'gi'));
        return parts.map((part, index) =>
          wordsToHighlight.includes(part.toLowerCase()) ? <strong key={index}>{part}</strong> : part);
       
};
return <p className={className}>{getHighlightedText(text, wordsToHighlight)}</p>;
};
export default HighlightedParagraph;