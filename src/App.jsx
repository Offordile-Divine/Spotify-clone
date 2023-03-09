import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import LandingPage from './Components/Landing Page/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
      <LandingPage />
    </div>
  )
}

export default App
