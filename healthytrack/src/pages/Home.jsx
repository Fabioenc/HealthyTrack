import { useTheme } from '../theme/ThemeContext'

function Home() {
  const { theme } = useTheme()
  const gradient = theme === 'dark'
    ? 'linear-gradient(135deg, #0d6efd 0%, #6610f2 100%)'
    : 'linear-gradient(135deg, #6ea8fe 0%, #c29ffa 100%)'

  return (
    <>
      <div className="p-5 mb-4 rounded-3" style={{ background: gradient }}>
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold">Tu versión más saludable</h1>
          <p className="col-lg-8 mx-auto fs-5">
            Caminatas, gym, buena comida y constancia. Te muestro lo que me funcionó.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
            <a href="/join" className="btn btn-light btn-lg fw-semibold">Quiero empezar</a>
            <a href="/workouts" className={`btn btn-lg ${theme==='dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}>Ver ejercicios</a>
          </div>
        </div>
      </div>
  
        {/* Sección de 3 tarjetas */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-75 h-100 border-0 rounded-4">
              <div className="card-body">
                <h5 className="card-title">Rutinas reales</h5>
                <p className="card-text">
                  Ejercicios que puedes hacer en parque o gym. Nada de cosas raras, lo que funciona.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-75 h-100 border-0 rounded-4">
              <div className="card-body">
                <h5 className="card-title">Tips de alimentación</h5>
                <p className="card-text">
                  Come mejor sin dejar de vivir. 80/20, proteína y hidratación diaria.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-75 h-100 border-0 rounded-4">
              <div className="card-body">
                <h5 className="card-title">Acompañamiento</h5>
                <p className="card-text">
                  Te puedo llevar seguimiento y motivarte como a mí me funcionó.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Home
  