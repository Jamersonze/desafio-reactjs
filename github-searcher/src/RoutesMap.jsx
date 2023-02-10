import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Pages/Home/Home'
import Profile from './components/Pages/Profile/Profile'

const RoutesMap = () => {

        const [username, setUsername] = useState('')

        const dataSubmitHandler = data => {
                setUsername(data)
        }

        return (
        <Router>
                <Routes>
                        <Route element={ <Home onSubmit={dataSubmitHandler} /> } path='/' exact/>
                        <Route element={ <Profile username={username} /> } path='/perfil' />
                </Routes>
        </Router>
)}

export default RoutesMap