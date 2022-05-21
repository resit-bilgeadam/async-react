import {Routes, Route} from 'react-router-dom';
import s from './App.module.css';
import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import Todos from './pages/Todos';

function App() {
  
  return (
    <>
      <Toolbar/>
      <div className={s.container}>
        <h1>Async React</h1>
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='todos' element={<Todos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
