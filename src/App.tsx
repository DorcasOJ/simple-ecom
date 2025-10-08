
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import { CreatePassword, CustomerSupport, ForgotPassword, Login, OrderTracking, Profile, Signup } from './pages/Users'
import { ROUTES } from './routes'
import UserHome from './pages/Users/UserHome'
import DispatchHome from './pages/Dispatchers/DispatchHome'


function App() {

  return (
    <Routes>

      <Route path='/' element={<Landing />} />
      <Route path={ROUTES.USER_LOGIN} element={<Login />} />
      <Route path={ROUTES.USER_SIGNUP} element={<Signup />} />
      <Route path={ROUTES.USER_FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.USER_CREATE_PASSWORD} element={<CreatePassword />} />
      <Route path={ROUTES.USERS_ORDERS} element={<OrderTracking />} />
      <Route path={ROUTES.USERS_SUPPORT} element={<CustomerSupport />} />
      <Route path={ROUTES.USERS_PROFILE} element={<Profile />} />


      <Route path={ROUTES.USERS_HOME} element={<UserHome />} />


      <Route path={ROUTES.DISPATCH_LOGIN} element={<Login />} />
      <Route path={ROUTES.DISPATCH_SIGNUP} element={<Signup />} />
      <Route path={ROUTES.DISPATCH_FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={ROUTES.DISPATCH_CREATE_PASSWORD} element={<CreatePassword />} />


      <Route path={ROUTES.DISPATCH_HOME} element={<DispatchHome />} />



      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />



    </Routes>
  )
}

export default App
