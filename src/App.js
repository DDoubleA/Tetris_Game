import './App.css';
import Tetris from './components/Tetris/Tetris';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Menu from './components/Menu/Menu';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <p> hello </p> */}
        {/* <Tetris/> */}
        <Routes>
          <Route path="/" element ={<Menu/>}/>
          <Route path="/tetris" element={<Tetris rows={20} columns={10}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
