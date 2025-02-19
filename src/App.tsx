import React from 'react';
import './App.scss';
import MainPage from './pages/mainpage/mainpage';
import NavBar from './navbar/navbar';
import {Routes, Route} from 'react-router';
import UserProfile from './pages/userpage/userprofile';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/user' element={<UserProfile />}></Route>
        <Route element={<UserProfile />}></Route>
      </Routes>
    </>
  );
}

export default App;
