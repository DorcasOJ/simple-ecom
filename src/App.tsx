
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import { CreatePassword, ForgotPassword, Login, Signup } from './pages/Users'
import { ROUTES } from './routes'
import UserHome from './pages/Users/UserHome'


function App() {

  return (
    <Routes>

      <Route path='/' element={<Landing />} />
      <Route path={ROUTES.USER_LOGIN} element={<Login />} />
      <Route path={ROUTES.USER_SIGNUP} element={<Signup />} />
      <Route path={ROUTES.USER_FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.USER_CREATE_PASSWORD} element={<CreatePassword />} />


      <Route path={ROUTES.USERS_HOME} element={<UserHome />} />

      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />



    </Routes>
  )
}

export default App
