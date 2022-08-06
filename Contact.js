import React from 'react';
import "./contact.css";
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'


function Contact() {
 
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [desc, setDesc] = useState('');
 
    
  
  const register = async (e) => {
    e.preventDefault();
    const  registered =  {
         number,
         email,
        desc
      } 
  
  
    const res = await fetch('https://snotat.herokuapp.com/app/contact', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({registered})
    })

    const data = await res;
    if (!data) {
      alert(`Error, Message not sent ${data}`)
    }
    else {
      alert(`Thanks for contacting us!!! `)
      setDesc("");
     setEmail("");
    setNumber("");
   
    
    }
    console.log(data)
    }
        
  
   
    
  
  
  return (
    <motion.div className='contact'  initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth, transition:{duration:0.2}}}>
        <div className="head">Contact</div>
      <form method='POST' action="https://snotat.herokuapp.com/app/contact" onSubmit={register} className="info box">
       
        <p className='direct'>Form</p> <input type="tel" name="tel" id="tel" value={number} placeholder="Mobile Number here..." onChange={e=>setNumber(e.target.value)}/>
      
        <input type="email" name="mail" id="mail" placeholder="Email Address here..." value={email} onChange={ e=>setEmail(e.target.value)}/>
        <div className="textarea"><textarea name="description" id="textarea" cols="30" rows="10" placeholder="Describe Your Need Here, we will contact you..." value={desc} onChange={e=>setDesc(e.target.value)} require={true}></textarea>
        {/* <input type="file" name="otherdetails" id="otherdetails" />
        <input type="file" name="otherdetails2" id="otherdetails2" />
          <input type="file" name="otherdetails3" id="otherdetails3" /> */}
          <button type='submit' className="submit">Submit</button>
        </div>
      
      </form>
      <div className="socials">
        

      </div>
      

    </motion.div>
  )
}

export default Contact