import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import NotFound from './views/NotFound'
import Menu from './components/Menu'
import SinglePost from './views/SinglePost'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/:id/detail' element={<SinglePost />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App