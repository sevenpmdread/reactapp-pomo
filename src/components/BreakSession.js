import React from "react"

function BreakSession(props)
{
    
   
    return(
        <section>
        <h4>Break Length</h4>
        <section className = "interval-container">
        
        <input          disabled={props.isplay === true}
                        name="breaklength" 
                        value={props.breakSession} 
                        onChange={props.handlechange} 
                       
                        className = "interval-length"
                        type = "number"
        />

       
        </section>
        </section>
    )
}

export default BreakSession