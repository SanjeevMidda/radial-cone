import React from 'react'
import circle from "../imgs/Ellipse 109.png";

function Circle({animation}) {

    let styles = {
        animation: animation,
    }
  return (
    <>
        <img src={circle} alt="circle" style={styles}/>
    </>
  )
}

export default Circle