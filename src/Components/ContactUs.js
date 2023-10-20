import React, { useState } from 'react';

const ContactUs = () => {
  const [isFocused, setIsFocused] = useState(false);
  
  const handleFocus = () => {
  setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    
  };
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [hideContent, setHideContent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if(!name){
        alert('Please Enter Name')
        return
    }else if(!email){
        alert('Please Enter Email')
        return
    }else if(!message){
        alert('Please Enter a Message')
        return
    }
    console.log("All fields are clear")
     
    setHideContent(true)
    setTimeout( ()=>{
      setHideContent(false)
    },5000);
    setName('')
    setMessage('')
    setEmail('')
  }

  return (
    <div className="productSection">
      <h1 className="text-center">Contact Us</h1>
      <div className="productItems contact-section">
        <div className="left_contact">
          <h1>Location</h1>
          <p>Fortune tower, 7th floor 701BS, Block-6 Karachi</p>
        </div>
        <div className="right_contact">
          <h1>Contact Form</h1>
          <form style={{ display: hideContent ? 'none' : 'flex' }} className='contact-form' onSubmit={onSubmit} >
              <input type="text" placeholder="Enter Your Name"  className="contact-name" style={{ outline: isFocused ? 'none' : 'none' }} onFocus={handleFocus} onBlur={handleBlur} value={name} onChange={(e) => setName(e.target.value)}/>
              <input type="email" placeholder="Enter Your Email" className="contact-email" style={{ outline: isFocused ? 'none' : 'none' }} onFocus={handleFocus} onBlur={handleBlur} value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea className="contact-textarea" placeholder="Enter Your Message" style={{ outline: isFocused ? 'none' : 'none' }} onFocus={handleFocus} onBlur={handleBlur} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <input type="submit" value="Submit" />
              
          </form>
          <div  style={{ display: hideContent ? 'block' : 'none' }} className="printMessage">
                <p>Your Message had been submitted.</p>
              </div>
        </div>
      </div>
       
    </div>
  )
}

export default ContactUs
