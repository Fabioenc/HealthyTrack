import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WorkoutGuide from './pages/WorkoutGuide'
import Nutrition from './pages/Nutrition'
import Join from './pages/Join'
import About from './pages/About'
import Admin from './pages/Admin'

function App() {
  return (
    <BrowserRouter>
      {/* bg-body/text-body usan variables de Bootstrap y cambian con el tema */}
      <div className="min-vh-100 d-flex flex-column bg-body text-body">
        <Navbar />
        <main className="container py-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<WorkoutGuide />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/join" element={<Join />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} /> {/* ← aquí */}
          </Routes>
        </main>
        <footer className="text-center text-secondary py-3 small">
          Hecho por Fabio 💪
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App

