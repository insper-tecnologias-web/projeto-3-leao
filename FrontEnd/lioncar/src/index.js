import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import User from './components/User';
import Publish from './components/Publish';
import About from './components/About';
import Feedback from './components/Feedback';
import MyCars from './components/MyCars';
import CarPage from './components/carPage';
import EditCarPage from './components/editrCarPage';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux/store';



<<<<<<< HEAD


=======
>>>>>>> 33077c6520b033e70b4242b885dd224258d32891
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "publish",
    element: <Publish />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "feedback",
    element: <Feedback />,
  },
  {
    path: "mycars",
    element: <MyCars />,
  },
  {
    path: "carpage",
    element: <CarPage />,
  },
  {
    path: "editcarpage",
    element: <EditCarPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
