import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './pages/loginPage';
import CreateAccountPage from './pages/createAccountPage'; 
import UserDashBoardPage from './pages/UserDashboard/UserDashBoardPage'; 
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ForecastChartPage from './pages/UserDashboard/ForecastChartPage';
import TasksInProgressPage from './pages/UserDashboard/TasksInProgressPage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/CreateAccount',
    element: <CreateAccountPage />
  },
  {
    path: '/User',
    element: <UserDashBoardPage />
  },
  {
    path: '/ForecastChartPage',
    element: <ForecastChartPage />
  },
  {
    path: '/TasksInProgressPage',
    element: <TasksInProgressPage />
  }, 
  {
    path: '/UserDashBoardPage', 
    element: <UserDashBoardPage/>
  }

]); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
