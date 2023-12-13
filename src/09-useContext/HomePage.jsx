import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const HomePage = () => {
  const {user} = useContext(UserContext);
  return (
    <>
        <h1>Home Page {user?.name}</h1>
        <hr></hr>
        <pre>
          {JSON.stringify(user, null, 3)}
        </pre>

    </>
  )
}

export default HomePage