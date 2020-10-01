import React from "react"

function SessionLen(props)
{
   

    return(
        <section>
        <h4>Session Length</h4>     
        <section className = "interval-container">
        
        <input          disabled={props.isplay === true}
                        name="sessionlength" 
                        value={props.sessionLen} 
                        onChange={props.handlechangeses} 
                        step="1"
                        className = "interval-length"
                        type = "number"
        />
    
       
        </section>
        </section>
    )
}

export default SessionLen