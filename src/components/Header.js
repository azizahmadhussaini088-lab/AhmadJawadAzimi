
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header(){
  const [dark,setDark] = React.useState(true);
  React.useEffect(()=>{
    document.documentElement.classList.toggle('light', !dark);
  },[dark]);
  const loc = useLocation();
  return (
    <header className="header container">
      <div className="logo">Ahmad Azimi</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="btn" onClick={()=>setDark(d=>!d)} style={{marginLeft:12}}>{dark ? '🌙' : '☀️'}</button>
      </nav>
    </header>
  )
}
