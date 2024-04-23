import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './scss/_mixins.scss';
import './scss/main.scss';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Error } from './components/Error/Error.tsx';
import Item from './components/Items/Items.tsx';
import Profile from './components/Profile/Profile.tsx';
import { OrderStateProvider } from './contexts/storeContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/:id",
        element: <Item/>
      },
      {
        path: "/profile/:profId",
        element: <Profile />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <OrderStateProvider>
    <RouterProvider router={router} />
  </OrderStateProvider>
)
