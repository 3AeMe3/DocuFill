import Contract from './components/Contract'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="document" element={<Contract />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
