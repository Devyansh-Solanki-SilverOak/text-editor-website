import React, {useState} from 'react';

function TextForm(props){

    const [text, setText] = useState("Enter text here...");
    const [word, setWord] = useState("");

    const changeText = (event) => {
        setText(event.target.value);    // setText is updating 'text' variable dynamically
    }
    const changeWord = (event) => {
        setWord(event.target.value);
    }


    const convertUppercase = () => {              // uppercase
        let newText = text.toUpperCase();
        setText(newText);
    }
    const convertLowercase = () => {              // lowercase
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearText = () => {                     // clear
        setText("");
    }
    const search = () => {                        // search
        let count = 0;
        let text_array = text.trim().split(" ");
        
        text_array.forEach((element, index) => {
            if(word === ""){}
            else if(text_array[index] === word){
                text_array[index] = `<mark>${word}</mark>`;
                count = count+1;
            }
        });
        let final_text = text_array.join(" ");

        document.getElementById("preview").innerHTML = final_text;

        if(word == ""){ props.showAlert(`Warning: Search box is empty`, "warning") }
        else if(count > 0){ props.showAlert(`Success: "${word}" word is existing`, "success") }
        else{ props.showAlert(`Oops: "${word}" word is absent`, "danger") }
    }


    const countWords = () => {
        let no_of_words;
        let formatted_text = text.replace(/ +/g, ' '); // this is regEx used to convert multiple spaces into single space.
        let text_arr = formatted_text.trim().split(/\s+/);
        if(text_arr[0] === ""){
            no_of_words = 0;
            return no_of_words;
        }
        else{
            return text_arr.length;
        }
    }
    const countCharacters = () => {
        let formatted_text = text.replace(/ +/g, ' '); // this is regEx used to convert multiple spaces into single space.
        let text_arr = formatted_text.trim().split(/\s+/);
        return text_arr.join("").length;
    }


    return (
        <div className={`text-${(props.mode =="light")?"dark":"light"}`}>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={` form-control   bg-${props.mode}   text-${props.mode =="light"?"dark":"light"}  border-${props.mode =="light"?"dark":"light"} `} value={text} onChange={changeText} id='myBox' rows="10"></textarea>
                    {/* onChange event is mandetory to write something in textArea */}
                </div>
                <div className="d-flex flex-md-row flex-column">
                    <div className='d-flex'>
                        <button disabled={text.length == 0 ? true:false} className='btn btn-primary me-2 ms-0' onClick={convertUppercase}>Uppercase</button>
                        <button disabled={text.length == 0 ? true:false} className='btn btn-primary mx-2' onClick={convertLowercase}>Lowercase</button>
                        <button disabled={text.length == 0 ? true:false} className='btn btn-primary mx-2' onClick={clearText}>Clear</button>
                    </div>
                    <div className='d-flex mt-md-0 mt-2'>
                        <button disabled={text.length == 0 ? true:false} className='btn btn-primary me-2 ms-md-2 ms-0' onClick={search}>Search</button>
                        <input className="form-control border-secondary me-2" type="search" value={word} onChange={changeWord} placeholder="Search a word" aria-label="Search" />
                    </div>
                </div>
            </div>
            <div className="container mt-4 pt-4">
                <h1>your text summary</h1>
                <p>{countWords()} words and {countCharacters()} characters</p>
                <h3 className='mt-4'>Preview</h3>
                <p className='mb-5' id='preview'>{text}</p>
            </div>
        </div>
    );
}

export default TextForm;