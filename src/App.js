import React, { useState } from 'react'
import ReactPlayer from 'react-player'

export const App = () => {
    let [state, setstate] = useState(0)
    state=4;
    return (
        <div>
           <ReactPlayer url="https://youtu.be/7sDY4m8KNLc" controls onReady={()=>console.log('started')}/>//hello123
       {state} </div>
    )
}
