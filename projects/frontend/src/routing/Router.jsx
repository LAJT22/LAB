import { createBrowserRouter } from 'react-router-dom';
import MoneyTransfer from '../components/MoneyTransfer/MoneyTransfer.jsx';
import Login from '../pages/AuthPage/Login/Login.jsx';
import Register from '../pages/AuthPage/Register/Register.jsx';
import BudgetPage from '../pages/BudgetPage/BudgetPage.jsx';
import MainPage from '../pages/MainPage/MainPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  { path: '/register', element: <Register /> },
  {
    path: '/budget',
    element: <BudgetPage />,
  },
  {
    path: '/transfer',
    element: <MoneyTransfer />,
  },
]);
