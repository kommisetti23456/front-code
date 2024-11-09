 // src/index.js or src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import { Provider } from 'react-redux';
// import store from './redux/store'; // Use default import without curly braces

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
