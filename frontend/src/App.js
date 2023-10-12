import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import UserDetail from './pages/UserDetail'
import RootLayout from './pages/Root'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'user/:userId', element: <UserDetail /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
