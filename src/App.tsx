import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className='mx-auto px-4 flex w-full min-h-screen border border-black'>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
