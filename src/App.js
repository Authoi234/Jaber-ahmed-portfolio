import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App max-w-screen-2xl">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
    </div>
  );
}

export default App;
