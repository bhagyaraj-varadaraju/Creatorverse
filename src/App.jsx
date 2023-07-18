import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomeLayout from './pages/HomeLayout'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import '@picocss/pico'
import './App.css'

function App() {
  const creatorverseRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
            index: true,
            element: <ShowCreators />
        },
        {
            path: '/new',
            element: <AddCreator />
        },
        {
            path: '/:id',
            element: <ViewCreator />
        },
        {
            path: '/edit/:id',
            element: <EditCreator />
        }
      ]
    },
])

  return (
      <>
         <RouterProvider router={creatorverseRouter}>

         </RouterProvider>
      </>
  )
}

export default App
