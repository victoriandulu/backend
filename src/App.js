import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from "./Components/Login";
import { Home } from "./Components/Home";
import { Navigations } from './Components/Navigations';
import { Logout } from './Components/Logout';

function App() {
  return (
    <BrowserRouter>
      <Navigations></Navigations>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
