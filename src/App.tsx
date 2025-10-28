import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProjectPresentation from './pages/ProjectPresentation'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router basename="/Proyecto_GCP_RQ">
      <Routes>
        <Route path="/" element={<ProjectPresentation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
