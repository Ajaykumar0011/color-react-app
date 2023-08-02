import React from 'react'


const Square = ({colorType,hexValue,toggle}) => {
  return (
    <section 
    className='square'
    style={{
        backgroundColor : colorType,
        color: toggle? 'white' : 'black'
    }}>
    <p>{colorType? colorType: 'Empty Value'}</p>
    <p>{hexValue? hexValue: null}</p>
    </section>
  )
}

Square.defaultProps = {
    colorType : "no value"
}

export default Square
