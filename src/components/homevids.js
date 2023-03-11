import { useState } from "react"

export default function Homevids({mysrc,name}){
    const [active ,setActive] = useState(false)
    
    return(
       <div className="imgContain" onMouseOut={() => {setActive(false)}} onMouseOver={() =>{ setActive(true)}}>
         {active ? (<p className="picName" >{name}</p>): (null)}
         {active ? <i className="material-icons arrow">call_made</i> : (null)}
         <div className="container" >
            <video src={mysrc} autoPlay loop playsInline muted  alt="ff" />
        </div> 
       </div>
    )}