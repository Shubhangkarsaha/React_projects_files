import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick  = ()=> {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick  = ()=> {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick  = ()=> {
        
        let newText = '';
        setText(newText)
    } 
    
    const handleCopy  = ()=> {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces  = ()=> {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
        }


    const handleOnchange = (event)=> {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    
  return (
    <>
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra</button>
            
        </div>
        <div className='container my-3'>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  );
}
