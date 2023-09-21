import React, { useState } from "react";
import "./Acordian.css";

const Qus =(props)=>{


   
    const [dis1,setdis1]=useState(false);

    
    return (
        <>
            <div className="qus">
                  
                   <div className="qus-1">
                   <p onClick={()=>{ setdis1(!dis1)}} className="btn"> { dis1 ? "-":"+"}</p>
                   <h3>{props.qus}</h3>
                   </div>
                   {
                    dis1 && <p className="ans">{props.ans}</p>
                   }
            </div>

        </>
    )
}
export default Qus;