import React from 'react'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Login.css'
import {motion} from "framer-motion"


function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [code, setCode] = useState('') 
   const handleLogin = async (e) => {

        e.preventDefault()
        setLoading(true)
        setError('')
        setCode('')

        const data = {
            email: username,
            password: password
        }
        
        if (!username || !password){
            toast.error('Por favor preencha todos os campos')
            setLoading(false)
            return
        } 
        try{
          const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            setCode(response.status)
            throw new Error('Erro ao efetuar login')
        }
        const result = await response.json()
        setToken(result.token)
        setIsLogged(true)
        toast.success('Login efetuado com sucesso')
        } catch (error){
          if (code === 403){
            toast.error('Usuário ou senha inválidos')
          }
          else{
            toast.error('Erro ao efetuar login')
          }
        } finally{
          setLoading(false)
        }
    }

    return (
<>
        <div className="container">
            {(
                <div className='contentBox'>
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Informe seu email' />
                        </label>
                        <label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Informe sua senha' />
                        </label>
                        <button type="submit" className="loginButton" disabled={loading}>Login</button>
                    </form>
                </div>
            )}
        </div>
        <ToastContainer />
    </>
);
}

export default Login
