import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Testimonails from "./components/Testimonails"
import { Toaster } from "react-hot-toast"


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Toaster position="top-right" />
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  )
}

export default App