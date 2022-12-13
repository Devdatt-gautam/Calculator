import React from 'react';
import "../Calculator/calculator.css"
let lastvalue="0";
const Key = (props) => {
  const handler=(e)=>{
  if((lastvalue==='*') && (e.target.value==='*')||(lastvalue==='+') && (e.target.value==='+')||(lastvalue==='-') && (e.target.value==='-')||(lastvalue==='*') && (e.target.value==='+')||(lastvalue==='/') && (e.target.value==='+')||(lastvalue==='*') && (e.target.value==='/')||(lastvalue==='+') && (e.target.value==='/')||(lastvalue==='+') && (e.target.value==='*'))
  {
    return
  }
  else{
    if(e.target.value==="=")
    { 
     props.setResult(eval(props.input))
     props.setInput(eval(props.input))
 
   }
     else if(e.target.value==="C")
     {
      props.setInput(props.input.slice(0,-1))
     }
     else if(e.target.value==="AC")
     {
       props.setInput("")
       props.setResult("")
       lastvalue=e.target.value
 
     }
     else
     {
       props.setInput(props.input+e.target.value.toString())
       lastvalue=e.target.value;
     }
 
 
  }
  }
  return (
    <button className='key' value={props.value} onClick={handler}>{props.value} </button>
  )
}

export default Key