const routines = [
    {
      title: 'Caminata diaria 60-90 min',
      level: 'Principiante',
      desc: 'Ideal si vienes de sedentarismo. 6-8 km si puedes, ritmo conversacional.',
    },
    {
      title: 'Full body en el parque (2-3x por semana)',
      level: 'Intermedio',
      desc: 'Sentadillas, marineros, peso muerto con mancuernas/elástico, pechadas, tríceps.',
    },
    {
      title: 'Gym 4x semana',
      level: 'Intermedio-Avanzado',
      desc: 'División tren superior/inferior, cardio suave al final.',
    },
  ]
  
  function WorkoutGuide() {
    return (
      <>
        <h2 className="mb-4">Guía de ejercicios</h2>
        <div className="row g-3">
          {routines.map((r, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card bg-secondary bg-opacity-90 h-100">
                <div className="card-body">
                  <h5 className="card-title">{r.title}</h5>
                  <span className="badge bg-info mb-2">{r.level}</span>
                  <p className="card-text">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
  
  export default WorkoutGuide
  