
import {Navigate, Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import { routes } from './Routes/Routes'
import ErrorComponent from './Component/Common/ErrorComponent'
import { Suspense, lazy } from 'react'
const SuspenseLoader =lazy(()=>import('./Component/Common/SuspenseLoader'))


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>
      <Route path={routes.main.path} element={<routes.main.element/>}>
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element/>} errorElement={<ErrorComponent/>}/>
        <Route path={routes.view.path} element={<routes.view.element/>} errorElement={<ErrorComponent/>}/>
      </Route>

      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>

    </Route>
  )
)
  
const App = () => {
  return (
    <Suspense fallback={<SuspenseLoader/>}>
    <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App