import React from 'react';
import ReactDOM from 'react-dom';
import Pinjam from './crud/Pinjam';
// import Buku from './crud/Buku';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Crud />,
  },
  {
    path: "peminjaman",
    element: <Pinjam />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


