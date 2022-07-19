import './TextForm.css';
import React, {useState} from 'react';




const TextForm = (props)=>
{
    const [text , SetText ] = useState('Enter text here ');
    
    
    const HandleOnClick = () => {
        let newText = text.toUpperCase();
        console.log("Clicked");
        SetText(newText);
        props.showAlert("Converted to Upper Case" , "Success")
    };
    
    const HandleonCopy = () => {
        let text = document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coped" , "Success")
    }
    const HandleOnClickRemovespacs = () => {
        let newText = text.split(/[ ]+/);
        SetText(newText.join(" "))
        props.showAlert("Space has been removed" , "Success")
    };
    const HandleOnClicklOWER = () => {
        let newText = text.toLowerCase();
        console.log("Clicked");
        SetText(newText);
        props.showAlert("Converted to lower Case" , "Success")
    };
    const HandleOnChange =(event) =>{
        console.log("Changed");
        SetText(event.target.value);
    };
    return(
        < >
        <div style={{color: props.mode==='dark'? 'white' : 'black' }} className='Container'>
            <h1>{props.heading}</h1>
            <div className="from">
            <textarea style={{backgroundColor: props.mode==='dark'? '#223164a6' : 'white' , color : props.mode==='dark'? 'white' : 'black' }} value={text} onChange={HandleOnChange} name="forcontrol" id="box" cols="100" rows="10"></textarea>

            </div>
            <button disabled = {text.length===0} className='button-27' onClick={HandleOnClick}>Convet to Uppercase</button>
            <button disabled = {text.length===0}className='button-27' onClick={HandleOnClicklOWER}>Convet to Lowercase</button>
            <button disabled = {text.length===0} className='button-27' onClick={HandleOnClickRemovespacs}>Remove Spaces</button>
            <button  disabled = {text.length===0} className='button-27' onClick={HandleonCopy}>Copy</button>
        </div>
        <div style={{color: props.mode==='dark'? 'white' : 'black' }} className="summery">
             
             <h1>Your Text Summery</h1>
             <h3> {text.split(" ").filter((element)=>{return element.length !== 0;}).length} Words {text.length} Characters and take {0.008 * text.split('').filter((element)=>{return element.length !== 0;}).length } mints to read. </h3>

        </div>

        </>
    );
}

export default TextForm;