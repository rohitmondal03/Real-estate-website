import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

// COMPONENTS
import Starter from '../pages/Starter'
import MainPage from '../pages/MainPage'

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Starter />} />
                <Route path='/home' element={<MainPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes