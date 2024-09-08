import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className='container mx-auto px-4 flex'>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
