import axios from 'axios';
import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './state-management/store';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const UsersList = lazy(() => import('./components/users-list'));
const UserDetails = lazy(() => import('./components/user-details'));

import './index.css';

//I am using interceptors so that I dont need to add the Token every API .I can do many things with req and res
axios.interceptors.request.use(
  req => {
    const TOKEN =
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGIzYTUzMTQzYWQyMjRiMzNiMGI5OTg3ZjNkNGUzYiIsInN1YiI6IjY0ZGFmZDc2YmYzMWYyMDFjYThkZWJjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jcPaRM0ION6go6H6zGWH1PWGQo2eckR-xPjCZl_Ro-k';
    req.headers['Authorization'] = `Bearer ${TOKEN}`;
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    // console.log('response: ', response);
    return response;
  },
  function axiosRetryInterceptor(err) {
    return Promise.reject(err);
  }
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to='users-list' />
  },
  {
    path: 'users-list',
    element: <UsersList />
  },
  {
    path: '/user-details/:id',
    element: <UserDetails />
  }
]);

createRoot(document.getElementById('root')).render(
  <div className='layout'>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>loading</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  </div>
);
