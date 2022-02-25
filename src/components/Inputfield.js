import React from "react";

export default function Inputfield(props) {
    return (props.ingrident.map((val,idx)=>{
    console.log(val)
    let  ingridentName1=`ingrident-${idx}`
return (<li  key={val.index}>
        <div className="input-group ">
        <input 
            className="form-control m-3"
            placeholder={ingridentName1}
            id={ingridentName1}
            data-id={idx}
            name="ingridentName"
            value={props.ingrident.ingridentName}
            onChange={props.onchange}
        />
   

    
       {idx === (props.ingrident.length-1)?<button type="button" onClick={()=>props.add()} className="m-3 btn btn-outline-secondary">Add</button> :<button type="button" onClick={() => props.delete(val)} className="m-3 btn btn-outline-secondary">
            Delete
        </button>}
    
</div>
</li>
)
})
     
    );
}
