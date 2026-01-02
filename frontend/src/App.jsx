
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'

function App() {
 
  return (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <Home />
    <Footer />
  </div> 
  )
}

export default App
