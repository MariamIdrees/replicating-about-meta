import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./static/Header"
import  Home  from "./pages/Home"
import About from "./pages/About"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Home/>
      <About/>
      <Routes>
       <Route path="/" element = {<Home/>}/>
       <Route path="about" element = {<About/>}/>
       {/* <Route path="/" element = {<Home/>}/> */}

      </Routes>
  
      </BrowserRouter>
    </div>
  )
}

export default App