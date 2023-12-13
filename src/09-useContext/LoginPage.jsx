import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

const LoginPage = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <>
        <h1>Login</h1>
        <hr></hr>
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>
        <button 
          className='btn btn-primary'
          onClick={()=>setUser({
            id: 123,
            name: "Saul Castillo",
            email: "secch97@gmail.com"
          })}
        >
          Set user
        </button>
    </>
  )
}

export default LoginPage