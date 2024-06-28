import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import { Login } from '../components/Login';
import { Page404 } from '../pages/Page404';


export const AppRouter = () => {


    const [user, setUser] = useState(null);

  return (
    <>
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="login" element={ <Login /> }/>
            <Route path="*" element={<Page404 />} />
        </Routes>
    </>
  )
}
