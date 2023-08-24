import React,{useState} from "react";


export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("handle up case clicked" + text);
        let newText=text.toUpperCase()
        setText(newText)
        //setText("hendle up clicked");
        props.showalert(" Converted To UpperCase Enable", "Success : ")
    }

    const handleLoClick=()=> {
        let newText=text.toLowerCase()
        setText(newText)
        props.showalert(" Converted To LowerCase Enable", "Success : ")
    }

    const handleTrimClick=()=>{
        let newText=text.trim()
        setText(newText)
        props.showalert(" Trim Starting And Ending Spaces", "Success : ")

    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showalert(" Extra Spaces Removed", "Success : ")

    }

    const handleClearClick=()=> {
        let newText=('')
        setText(newText)
        props.showalert(" Text  Cleared ", "Success : ")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value)
    }
    const [text,setText] = useState("");
  return (
    <>
    <div className="container my-3" style={{color: props.mode ==='dark'?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  
        <textarea className="form-control" value={text} onChange={handleOnChange}
         style= {{backgroundColor: props.mode ==='dark'?"gray":"white" ,color: props.mode ==='dark'?"white":"black"}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleTrimClick}>Trim spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear ex. spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>

    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?"white":"black"}}>
        <h3>Your Text Summary</h3>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p> {0.008 * text.split(" ").length} minute Read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text:"enter something in text area to preview here"}</p>
    </div>
    </>
  );
}
