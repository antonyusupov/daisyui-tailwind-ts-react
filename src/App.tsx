import { Navbar } from "./components/indx"
import { Hero, Associates, Contact, Footer, Offers, Works } from "./containers"

function App() {

  return (
    <div className=' bg-gray-100'>
      <div>
        < Navbar />
      </div>

      <div>
        <Hero />
        <Works /> 
        <Associates /> 
        <Offers /> 
        <Contact />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
