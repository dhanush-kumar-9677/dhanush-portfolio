
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// import Nav from './pages/nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route index element={<Home/>}/>
      <Route path='/Skill' element={<Skill/>}/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/About'  element={<About/>}/>
      <Route path='/Contact'  element={<Contact/>}/>
      <Route path='/Resume'  element={<Resume/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
