import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Header/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <nav className="App">
      <Header></Header>
      <Shop></Shop>
    </nav>
  )
}

export default App
