'use client';
import React from 'react'

const AddtoCart = () => {
  return (
    <div>
        <button onClick={()=> console.log("Client server component")}>Add to cart</button>
    </div>
  )
}

export default AddtoCart