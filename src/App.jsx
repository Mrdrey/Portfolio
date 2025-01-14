import './App.css'
import Layout from './Pages/Layout'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
function App() {
 
  return (
    <BrowserRouter > 
    <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<About/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
       </Route>
        
    </Routes>
</BrowserRouter>
  )
}

export default App
