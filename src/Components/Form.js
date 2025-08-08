import React, { useState } from 'react'

export default function Form() {

    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

   let clearText = () =>{

        setEmail("");
        setText("");
    }


    let toUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    let toLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        
    }

  return (

    <>
    <div className='container my-3'>


          <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter your text here
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder='Enter your text here'
          value={text}
        onChange={(e)=>setText(e.target.value)}
          
        ></textarea>

        <button onClick={clearText} type="button" className="btn btn-success my-3">Clear Text</button>
        <button onClick={toUpper} type="button" className="btn btn-dark my-3 mx-2">Convert to Upper Case</button>
        <button onClick={toLower} type="button" className="btn btn-danger my-3 mx-2">Convert to Lower Case</button>
       



      </div>
      
    </div>

    <div className='container'>
        <h6><strong>Your Email :</strong> {email}</h6>
        <h6><strong>Your Text :</strong>  {text}</h6>
    </div>
</>

  )
}
