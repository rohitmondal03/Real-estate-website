import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

// COMPONENTS
import Starter from "../pages/Starter/Starter"
import Projects from "../pages/Projects/Projects"

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Starter />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes