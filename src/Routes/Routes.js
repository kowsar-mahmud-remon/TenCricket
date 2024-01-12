import { createBrowserRouter } from 'react-router-dom';

import Main from '../layout/Main';
import Home from '../pages/Home/Home';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUp/SignUp';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/signup',
        element: <SignUpPage></SignUpPage>
      },

    ],
  },
]);

export default router;