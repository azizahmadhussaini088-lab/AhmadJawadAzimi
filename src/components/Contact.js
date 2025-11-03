
import React from 'react';

export default function Contact(){
  const [sent,setSent] = React.useState(false);
  return (
    <div className="section container">
      <h2>Contact</h2>
      <div className="card" style={{marginTop:12,maxWidth:700}}>
        {!sent ? (
          <form onSubmit={(e)=>{e.preventDefault(); setSent(true);}} style={{display:'grid',gap:10}}>
            <input placeholder='Your name' className="card" style={{padding:10}} />
            <input placeholder='Email' className="card" style={{padding:10}} />
            <textarea placeholder='Your message' rows={5} className="card" style={{padding:10}} />
            <button className="btn" type="submit">Send Message</button>
          </form>
        ) : (
          <div>✅ Your message has been sent. Thank you!</div>
        )}
      </div>
    </div>
  )
}
