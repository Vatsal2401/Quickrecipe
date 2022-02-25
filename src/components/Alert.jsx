import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    const lower =word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    
    <div style={{height:"50px"}} className="sticky-top">
     {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissble fadeshow`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
  </div>}</div>
  )
}
