import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Pages/Home/Home'

const RoutesMap = () => (
        <Router>
                <Routes>
                        <Route element={ <Home /> } path='/' exact/>
                </Routes>
        </Router>
)

export default RoutesMap