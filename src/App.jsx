import * as React from 'react'
import {useState} from 'react'
import { Infocard, Layout } from './components'
import { PATH } from './constrats/path'
import { AuthPage, DetailPage, HomePage, LoginPage, NewBookPage, PutPage, RegisterPage, UnauthPage } from './Pages'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const[isLogin,setIsLogin] = useState(false);

  React.useEffect(()=> {
    const token = window.localStorage.getItem("token");

    if(token){
      setIsLogin(true);
    }else {
      setIsLogin(false)
    }
  },[window.localStorage.getItem("token")])

  const user = createBrowserRouter([
    {
      path : PATH.login,
      element : <AuthPage/>
    },
    {
      path : PATH.ubahById,
      element : <PutPage/>
    },
    {
      path : PATH.register,
      element : <AuthPage />
    },
    {
      path : PATH.detail,
      element : <DetailPage/>
    },
    {
      path : PATH.newBook,
      element : <NewBookPage/>
    },
    {
      path : PATH.home,
      element : <HomePage/>
    },
    {
      path : '/*',
      element : <HomePage/>
    }
  ])

  const guest = createBrowserRouter([
    {
      path : PATH.login,
      element : <LoginPage/>
    },
    {
      path : PATH.register,
      element : <RegisterPage />
    },
    {
      path : PATH.detail,
      element : <UnauthPage/>
    },
    {
      path : PATH.newBook,
      element : <UnauthPage/>
    },
    {
      path : PATH.home,
      element : <HomePage/>
    },
    {
      path : '/*',
      element : <HomePage/>
    }
  ])

  return (
    <div>
      <Layout>
        {
          !isLogin ? (
            <RouterProvider router={guest}/>
          ) : (<RouterProvider router={user}/>)
        }
      
      
      </Layout>
    </div>
  )
}

export default App
