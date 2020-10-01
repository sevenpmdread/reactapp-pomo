import React from "react"

function Numberofsession(props)
{
    
   
    return(
        <section>
        <h4>Set Number of Sessions</h4>
        <section className = "interval-container">
        
        <input          disabled={props.isplay === true}
                        name="session_num" 
                        value={props.sessionnum} 
                        onChange={props.handlechangenum} 
                        className = "interval-length"
                        type = "number"
        />

       
        </section>
        </section>
    )
}

export default Numberofsession