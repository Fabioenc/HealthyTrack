// src/pages/Join.jsx
import { useState } from 'react'
import { addSignup } from '../lib/storage'

function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: '',
    currentWeight: '',
  })
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSending(true)

    // Validación simple
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Por favor completa nombre y correo.')
      setSending(false)
      return
    }

    // Guardar en localStorage
    addSignup({
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      goal: formData.goal.trim(),
      currentWeight: formData.currentWeight ? Number(formData.currentWeight) : null,
    })

    alert('✅ Gracias por registrarte, te escribiré para ayudarte.')
    setFormData({ name: '', email: '', goal: '', currentWeight: '' })
    setSending(false)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2 className="mb-3 text-center">Únete a mi seguimiento 💪</h2>
        <p className="text-center text-secondary">
          Llena este formulario y te ayudo con una guía básica.
        </p>
        <form onSubmit={handleSubmit} className="bg-secondary bg-opacity-25 p-4 rounded">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Objetivo</label>
            <input
              type="text"
              className="form-control"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              placeholder="Bajar 10kg, marcar abdomen, más energía..."
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Peso actual (opcional)</label>
            <input
              type="number"
              className="form-control"
              name="currentWeight"
              value={formData.currentWeight}
              onChange={handleChange}
              min="0"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={sending}>
            {sending ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Join
