import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../theme/ThemeContext'

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const navClasses =
    theme === 'dark'
      ? 'navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary'
      : 'navbar navbar-expand-lg navbar-light bg-light border-bottom border-secondary'

  return (
    <nav className={navClasses}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">HealthyTrack</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Inicio</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/workouts">Guía ejercicios</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/nutrition">Tips alimentación</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/join">Únete</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">Sobre mí</NavLink></li>
          </ul>

          <div className="d-flex ms-lg-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-outline-secondary"
              title={theme === 'dark' ? 'Cambiar a claro' : 'Cambiar a oscuro'}
            >
              {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
