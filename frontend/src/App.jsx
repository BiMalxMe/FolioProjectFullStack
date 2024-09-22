import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createcard } from './components/Createcard'
import { Card } from './components/Card'

function App() {
const [card,setcard]=useState([])

fetch('http://localhost:3000/info').then(
  async function(res) {
    const json=await res.json()
    setcard(json.folios)
    console.log(card)
  }
)
  return (
    <div>
      <Createcard />
      <Card card={card}></Card>  
    </div>
  )
}

export default App
