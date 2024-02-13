import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/routes';

function App() {
  return (
    <div className="App max-w-screen-2xl">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
