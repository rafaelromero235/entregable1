import React from 'react'
import ButtonBox from './ButtonBox';

const QuoteBox = ({ramdonquote , ramdoncolor,getRamdonAll}) => {

    console.log(ramdonquote);
    
    const colorObj={color:ramdoncolor}

    const backgroundObj = {backgroundColor : ramdoncolor}
  return (
    <article style={colorObj} className='Card'>
        <p className='card__quote'> {ramdonquote.quote}</p>
        <h1 className='card__author'>{ramdonquote.author}</h1>
       <ButtonBox getRamdonAll={getRamdonAll}
        backgroundObj={backgroundObj}
    />
    </article>
  )
}

export default QuoteBox