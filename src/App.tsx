import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./paginas/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Login from "./paginas/login/Login"


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App