import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Mission from './pages/Mission'
import Resources from './pages/Resources'
import Board from './pages/Board'
import Impact from './pages/Impact'
import GetInvolved from './pages/GetInvolved'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/board" element={<Board />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Route>
    </Routes>
  )
}

export default App
