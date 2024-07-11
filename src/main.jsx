import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts, { loader as postsLoader } from './routes/Posts';
import NewPost from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: () => { }, // gets executed whenever the element is about to be rendered. Good for preparing 
        // data that is needed for the component to be rendered
        children: [{ path: '/create-post', element: <NewPost /> }],
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/*enables routing and renders components based off url path */}
  </React.StrictMode>
);
