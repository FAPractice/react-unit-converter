import React, { useState } from 'react'

const TextField = ({ alignment, text, onChange }) => {
  return (
    <input style={{ textAlign: alignment }} type="number" className='textfield' onChange={(e) => onChange(e.target.value)} placeholder="Enter Value" />
  )
}

export default TextField