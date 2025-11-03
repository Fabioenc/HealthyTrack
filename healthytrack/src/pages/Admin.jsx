// src/pages/Admin.jsx
import { useEffect, useMemo, useState } from 'react'
import { loadSignups, deleteSignup, clearSignups } from '../lib/storage'

function toCSV(rows) {
  if (!rows.length) return ''
  const headers = ['id', 'createdAt', 'name', 'email', 'goal', 'currentWeight']
  const escape = (v) => {
    if (v === null || v === undefined) return ''
    const s = String(v)
    // escapado CSV básico
    if (s.includes('"') || s.includes(',') || s.includes('\n')) {
      return `"${s.replace(/"/g, '""')}"`
    }
    return s
  }
  const lines = [
    headers.join(','),
    ...rows.map(r => headers.map(h => escape(r[h])).join(','))
  ]
  return lines.join('\n')
}

function download(filename, content, mime = 'text/csv;charset=utf-8') {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

function Admin() {
  const [data, setData] = useState([])
  const [q, setQ] = useState('') // búsqueda simple

  useEffect(() => {
    setData(loadSignups())
  }, [])

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return data
    return data.filter(r =>
      (r.name?.toLowerCase() || '').includes(term) ||
      (r.email?.toLowerCase() || '').includes(term) ||
      (r.goal?.toLowerCase() || '').includes(term)
    )
  }, [q, data])

  function handleDelete(id) {
    if (!confirm('¿Eliminar este registro?')) return
    const list = deleteSignup(id)
    setData(list)
  }

  function handleClearAll() {
    if (!confirm('¿Vaciar todos los registros?')) return
    clearSignups()
    setData([])
  }

  function handleExportCSV() {
    const csv = toCSV(data)
    if (!csv) {
      alert('No hay registros para exportar.')
      return
    }
    const date = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')
    download(`healthytrack-registros-${date}.csv`, csv)
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap">
        <h2 className="m-0">Registros (Admin)</h2>
        <div className="d-flex gap-2">
          <input
            type="search"
            className="form-control"
            placeholder="Buscar por nombre, correo u objetivo..."
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <button className="btn btn-outline-secondary" onClick={() => setQ('')}>Limpiar</button>
          <button className="btn btn-success" onClick={handleExportCSV}>Exportar CSV</button>
          <button className="btn btn-outline-danger" onClick={handleClearAll}>Vaciar</button>
        </div>
      </div>

      {!filtered.length ? (
        <div className="alert alert-secondary">No hay registros todavía.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover align-middle">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Objetivo</th>
                <th>Peso</th>
                <th style={{width: 1}}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.id}>
                  <td className="text-nowrap">
                    {new Date(r.createdAt).toLocaleString()}
                  </td>
                  <td>{r.name}</td>
                  <td>{r.email}</td>
                  <td className="text-break">{r.goal}</td>
                  <td>{r.currentWeight ?? '-'}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(r.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="text-secondary small mt-2">
        *Esta vista solo usa <code>localStorage</code> (demo). Para producción, migraremos a una API.
      </p>
    </div>
  )
}

export default Admin
