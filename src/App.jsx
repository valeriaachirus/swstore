import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import   Slider  from "./pages/Slider"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import  Contact  from "./pages/Contact"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/ourteam" element={<Slider />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
