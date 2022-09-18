import React from 'react'

const ButtonBox = ({getRamdonAll,backgroundObj}) => {
  return (
    <button style={backgroundObj}  className='card__btn'  onClick={getRamdonAll}>&#62;</button>
  )
}

export default ButtonBox