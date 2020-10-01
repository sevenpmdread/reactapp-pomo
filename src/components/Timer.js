import React from "react"
import SessionLen from "./SessionLen"

class Timer extends React.Component
{
    constructor()
    {
        super()
        this.state = 
        {
            isSession:true,
            timerSeconds : 0,
            intervalId:0
        }
        this.play = this.play.bind(this)
       
        this.decreaseTimer = this.decreaseTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.refreshTimer = this.refreshTimer.bind(this)
    }

    play()
    {
        let intervalId = setInterval(this.decreaseTimer,1000)
        this.props.playstoptimer(true);
        this.setState(
            {
                intervalId:intervalId
            }
        )
    }
    stopTimer()
    {
        clearInterval(this.state.intervalId)
        this.props.playstoptimer(false);

    }
    refreshTimer()
    {
        this.stopTimer()
        this.props.refreshtime()
        this.props.playstoptimer(false);
        this.setState(
            {
                timerSeconds:0,
                isSession:true
              
                
            }
        )
        
    }

    decreaseTimer()
    {
        switch(this.state.timerSeconds){
        case 0:
            if(this.props.timerMinute === 0)
            {
                if(this.state.isSession)
                {
                        this.setState(
                            {
                                isSession:false
                            }
                        )
                        this.props.toggle(this.state.isSession)
                }
                else
                {
                    this.setState(
                        {
                            isSession:true
                        }
                    )
                    this.props.toggle(this.state.isSession)
                }
            }
            else
            {
                this.props.updateminute()
                this.setState({timerSeconds:59})
            }
            
            break
        default:    
            this.setState(prev =>
            {
                return{
                    timerSeconds:prev.timerSeconds-1

                }
            }
            )
        }
    }
        render()
        {
            return(
                <section >
                <section className="timer-container">
                <h4>{this.state.isSession ? "Session" : "Break"}</h4>
                <p>Current Session : {this.props.current_session_num}</p>
                <span className= "timer">{this.props.timerMinute}:</span>
                <span className= "timer">{this.state.timerSeconds === 0 ? "00" : this.state.timerSeconds < 10 ? "0" + this.state.timerSeconds :
                this.state.timerSeconds}</span>
               </section > 
               <section className="timer-actions">
                <button className ="buttonclass" onClick = {this.play}>Play</button>
                <button className ="buttonclass" onClick = {this.stopTimer}>Stop</button>
                <button className ="buttonclass" onClick = {this.refreshTimer}>Refresh</button>
                </section>
               </section>
            )
        }
}

export default Timer