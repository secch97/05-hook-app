import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage';
import NavBar from './NavBar';
import UserProvider from './context/UserProvider';
Navigate


const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main App</h1>
        <NavBar></NavBar>
        <hr></hr>

        <Routes>
          <Route path="/" element={<HomePage></HomePage>}>

          </Route>
          <Route path="/login" element={<LoginPage></LoginPage>}>

          </Route>
          <Route path="/about" element={<AboutPage></AboutPage>}>

          </Route>
          <Route path="/*" element={<Navigate to="/"/>}></Route>
        </Routes>
    </UserProvider>
  )
}

export default MainApp