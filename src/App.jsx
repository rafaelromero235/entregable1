import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox';
import color from './utils/color';


function App() {
 

  console.log(quotes);
const getIndexRamdon = arr =>{
  return Math.floor (Math.random() * arr.length);
}

const firstquote = quotes[getIndexRamdon(quotes)];
const firstcolor = color[getIndexRamdon(color)];

const [ramdonquote, setramdonquote] = useState(firstquote)
const [ramdoncolor, setramdoncolor] = useState(firstcolor)

const backgroundobject = {backgroundColor : ramdoncolor}

const getRamdonAll = () => {
setramdonquote(quotes[getIndexRamdon(quotes)])
setramdoncolor(color[getIndexRamdon(color)])

}

  return (
    <div style={backgroundobject} className="App">
     <QuoteBox 
     ramdonquote ={ramdonquote}
     ramdoncolor = {ramdoncolor}
     getRamdonAll={getRamdonAll}
     />

    </div>
  )
}

export default App
