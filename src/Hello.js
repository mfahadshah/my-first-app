import React from 'react'

import './Hello.css'

function Hello(props) {
    return <div className={`${props.fontSize} ${props.BgColor} ${props.color}`}> This is hello from Hello.js
     
    </div>
}

export default Hello;