import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { AuthProvider } from './components/AuthProvider'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (

    <AuthProvider>
      <Login></Login>
    </AuthProvider>
  )
}

export default App
