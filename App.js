import React, {useState, useEffect} from 'react'
import './App.css'
function App(){
    const[userchoice, setUserchoice]=useState('rock')
    const[computerchoice, setComputerchoice]=useState('rock')
    const[userpoints, setUserpoints]=useState(0)
    const[computerpoints, setComputerpoint]=useState(0)
    const[turnresult, setTurnresult]=useState(null)
    const[result, setResult]=useState('let\s see who wins')
    const[gameover, setGameover]=useState(false)
    const choices=['rock','paper','scissors']
    const handleonClick=(choice)=>{
        setUserchoice(choice)
        generatecomputerchoice()
    }
    const generatecomputerchoice=()=>{
        const randomchoice=choices[Math.random()*choices.length]
        setcomputerchoice(randomchoice)
    }
    const reset=()=>{
        window.location.reload()
    }
useEffect(()=>{
    const combomoves=userchoice+computerchoice
if(userpoints<=4 && computerpoijnts<=4){
    if(combomoves=='rockscissors'|| combomoves=='paperrock'|| combomoves=='scissorpaper'){
     const updateuserpoints=userpoints+1
     setuserpoints(updateuserpoints)
     setturnresult('user got thr point')
     if (updateduserpoints===5){
        setgameover(true)
        setresult('user wins')
     }
    }
    if(combomoves=='rockscissors'|| combomoves=='paperrock'|| combomoves=='scissorpaper'){
        const updatedcomputerpoints=computerpoints+1
        setcomputerpoints(updatedcomputerpoints)
        setturnresult('computer got the point')
        if(updatedcomputerpoints===5){
            setgameover(true)
            setresult('computer wins')
        }
     }
    }
    if(combomoves=='rockscissors'|| combomoves=='paperrock'|| combomoves=='scissorpaper'){
       setturnresult('no one got a point')
    }
}, [userchoice, computerchoice])
return(
  <>
    <div>
        <h1 className='heading'>rockpaperscissor</h1>
        <div className='score'></div>
        <h1>userpoints:{userpoints}</h1>
        <h1>computerpoints:{computerpoints}</h1>
    </div>
     <div className='choices'>
        <div className='choice-user'>
            <img className='user-hand' src={'../images/${userchoice.png}'}/>
        </div>
        <div className='choice-computer'>
            <img className='computer-hand' src={'.../images/${computerchoice.png'}/>
        </div>
     </div>
     <div children='button-div'>{choices.map((choice,index)=>
     <button className='button' key={index} onClick={()=>{choice}}></button>
     )}
     </div>
     <div className='result'>
        <h1>turnresult:{turnresult}</h1>
        <h1>final result:{result}</h1>
     </div>
     <div className='button-div'>
        {gameover && <button className='button' onClick={()=>reset()}>restart game?</button>
        }
     </div>
     </>
)
 }
export default App;