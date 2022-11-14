import React, {useState} from 'react'

export default function Textform(props) {
 const handleUpClick = ()=>{
  //  console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    //  console.log("Lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase!", "success");
  }
  const handleClearClick = ()=>{
    //  console.log("Clear Text was clicked" + text);
      let newText = '';
      setText(newText)
      props.showAlert("Text is Cleared!", "success");
  }
  
  
  //const handleTitlecaseClick = ()=>{
    //let newText = text.toTitlecase();
      //setText(newText)   
 // }
  const handleCopyClick = ()=>{
    var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard!", "success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!", "success");
  }
  
  
      const handleOnChange = (event)=>{
 // console.log("On change");
  setText(event.target.value);
}
  const [text, setText] = useState(' Enter text here '); 
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); //Correct way to change the state
  return (
   <> 
   <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
color: props.mode=== 'dark'?'white':'black' }} id="myBox" rows="9"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
{/*<button className="btn btn-primary mx-3" onClick={handleTitlecaseClick}>Convert to Titlecase</button>*/} 
<button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy Text</button> 
<button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 

  </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").length } Minutes Or {0.48*text.split(" ").length} Seconds read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
    </>
  )
}
