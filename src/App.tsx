
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import { Login, Signup } from './pages/Users'
import { ROUTES } from './routes'


function App() {

  return (
    <Routes>

      <Route path='/' element={<Landing />} />
      <Route path={ROUTES.USER_LOGIN} element={<Login />} />
      <Route path={ROUTES.USER_SIGNUP} element={<Signup />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />


    </Routes>
  )
}

export default App
