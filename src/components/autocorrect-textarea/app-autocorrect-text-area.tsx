import {useState} from "react";
import Teaxtarea from "../ui/Teaxtarea";

const  AutocorrectTextArea= ({dictionary = {}}) => {

    const [text, setText] = useState('')
    const dictionaryWords = Object.getOwnPropertyNames(dictionary);

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
        const words = text.split(" ");
        words.forEach((d, i) => {
            if (dictionaryWords.includes(d)){
                const n = dictionaryWords.indexOf(d);
                words[i] = dictionary[dictionaryWords[n] as keyof typeof dictionary];
                setText(words.join(" ")+" ");
            }
        });
    }

    return <div className="flex justify-center items-center w-full">
        <Teaxtarea
            rows={15}
            data-testid="textarea"
            value={text}
            onInput={handleChange}/>
    </div>
}

export default AutocorrectTextArea;