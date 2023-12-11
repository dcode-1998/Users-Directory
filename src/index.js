import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './state-management/store';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

const UsersList = lazy(() => import('./components/users-list'));
const UserDetails = lazy(() => import('./components/user-details'));

import './index.css';

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
