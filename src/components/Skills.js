
import React from 'react';
import { skills } from '../data';

export default function Skills(){
  return (
    <div className="section container">
      <h2>Skills</h2>
      <div style={{marginTop:12}}>
        {skills.map((s, idx) => (
          <div key={idx} style={{marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <strong>{s.name}</strong><span className="small">{s.level}%</span>
            </div>
            <div className="skill-bar" style={{marginTop:8}}>
              <div className="skill-fill" style={{width: `${s.level}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
