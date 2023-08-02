import React from 'react'
import colorNames from 'colornames';
const Input = ({colorType,setColorType,setHexValue,toggle,setToggle}) => {
  return (
    <form onSubmit={e=> e.preventDefault()} >
        <label htmlFor="inp">input </label>
        <input 
            type="text"
            id='inp'
            placeholder='enter the colorname'
            required
            autoFocus
            value={colorType}
            onChange={(e)=> {
                setColorType(e.target.value)
                setHexValue(colorNames(e.target.value))
            }} 
        />
        <button 
        type='button'
        onClick={()=> setToggle(!toggle)}
        >
        Press to toggle
        </button>
    </form>
  )
}

export default Input
