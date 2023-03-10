import { useState } from "react"

export default function Homepics({mysrc,name,coming}){
    const [active ,setActive] = useState(false);
    
    return(
       <div className="imgContain" onMouseOut={() => {setActive(false)}} onMouseOver={() =>{ setActive(true)}}>
         {active && (<p className="picName" >{name}</p>)}
         {active && (coming ? <i className="material-icons arrow" >lock_outline</i> :  
        <i className="material-icons arr arrow">call_made</i> 
 ) }
         <div className="container" >
            <img src={mysrc} alt="" />
         </div> 
       </div>
    )}