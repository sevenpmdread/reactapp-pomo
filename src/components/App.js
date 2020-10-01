import React from 'react';
import '../App.css';
import SessionLen from "./SessionLen"
import BreakSession from "./BreakSession"
import Timer from "./Timer"
import Numberofsession from "./Numberofsession"
class App extends React.Component {
  
  constructor()
  {

    super()
    this.state = 
    {
      breaklength : 1,
      sessionlength : 1,
      timerMinute: 0,
      status:"Pomodoro Clock",
      isplay:false,
      session_num:1,
      current_session_num:1
    }
  
    this.handleChange = this.handleChange.bind(this)
    this.onToggleInterval = this.onToggleInterval.bind(this)
    this.updateTimerMinute = this.updateTimerMinute.bind(this)
    this.refreshTimer = this.refreshTimer.bind(this)
    this.handleChangeses = this.handleChangeses.bind(this)
    this.onplaystoptimer = this.onplaystoptimer.bind(this)
    this.handleChangeNum = this.handleChangeNum.bind(this)
  //  this.handlesChange_ses = this.handleChange_ses.bind(this)

  }

  
  
  handleChange(event)
  {
    const {name, value} = event.target  
    if(event.target.value < 1)
    this.setState({breaklength: 0})
    else if(event.target.value > 60)
    this.setState({breaklength: 60})
    else
    this.setState({breaklength: event.target.value});
  

    

  }
  handleChangeses(event)
  {
    const {name,value} = event.target
    if(event.target.value < 1)
    this.setState({sessionlength: 0})
    else if(event.target.value > 60)
    this.setState({sessionlength: 60})
    else
    this.setState({sessionlength: event.target.value});
    this.setState({timerMinute:this.state.sessionlength}
    )
  }
  handleChangeNum(event)
  {
    const {name,value} = event.target
    if(event.target.value < 1)
    this.setState({session_num: 0})
    else if(event.target.value > 60)
    this.setState({session_num: 60})
    else
    this.setState({session_num: event.target.value});
  }
  
  onToggleInterval(isSession)
  {
    if(isSession)
    {
      this.setState(
        {
          timerMinute:this.state.sessionlength,
          current_session_num:this.state.current_session_num+1
        }
      )
    }
    else
    {
      this.setState(
        {
          timerMinute:this.state.breaklength
        }
      )
    }
    
  }
  updateTimerMinute()
  {
    
        if(this.state.current_session_num > this.state.session_num)
        this.setState({status:"life is meaningless"})   
         this.setState(prev =>{
      return {
        
        timerMinute : prev.timerMinute - 1
      }
    })
  
  }
  refreshTimer()
  {
    this.setState(
      {
        timerMinute: this.state.sessionlength,
        session_num:0,
        current_session_num:0
        
      }
    )
  }
  onplaystoptimer(isplay)
  {
    this.setState(
      {
        isplay:isplay
      }
    )
  }
 

  render()
  {
    return (
      <main>
      
    <h2>{this.state.status}</h2>
   
        <section className = "interval-length-container">
        <BreakSession breakSession = {this.state.breaklength}
        handlechange = {this.handleChange}
        isplay ={this.state.isplay}/>
        <SessionLen   sessionLen = {this.state.sessionlength} 
        handlechangeses = {this.handleChangeses}
        isplay ={this.state.isplay}/>
        <Numberofsession  isplay ={this.state.isplay} sessionnum = {this.state.session_num}
        handlechangenum = {this.handleChangeNum}/>
     
        </section>
        <Timer timerMinute = {this.state.timerMinute} 
        updateminute = {this.updateTimerMinute}
        sessionlength = {this.state.sessionlength} 
        refreshtime = {this.refreshTimer}
        toggle = {this.onToggleInterval}
        handlechange = {this.handleChangeses}
        current_session_num = {this.state.current_session_num}
        playstoptimer = {this.onplaystoptimer}/>
       

      </main>
     )
  }
  
}

export default App;
