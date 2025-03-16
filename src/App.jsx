import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './My Components/Nav';
function App() {
  return (
    <div className="App">
      <Nav></Nav>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
