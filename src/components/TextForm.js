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
    //var text = document.getElementById("myBox");
      //text.select();
      navigator.clipboard.writeText(text);
     // navigator.clipboard.writeText(text.value);
     // document.getSelection().removeAllRanges(); 
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
     <h1 className='mb-3'>{props.heading}</h1>
<div className="mb-3">

<textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2b3e50':'white', 
color: props.mode=== 'dark'?'white':'black' }} id="myBox" rows="9"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearClick}>Clear Text</button>
{/*<button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleTitlecaseClick}>Convert to Titlecase</button>*/} 
<button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopyClick}>Copy Text</button> 
<button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> 

  </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text Summary</h2>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes Or {0.48*text.split(" ").filter((element)=>{return element.length!==0}).length} Seconds read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
    </>
  )
}
