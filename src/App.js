import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';


const appLayout = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  }
])



function App() {
  return (
    <RouterProvider router={appLayout}/>
  );
}

export default App;
