import './App.css'
import HeroSection from './components/HeroSection'
import EventDetails from './components/EventDetails'
import RSVPForm from './components/RSVPForm'
import WeddingFooter from './components/Footer'

function App() {

  return (
    <>
    <div className='w-3xl h-screen flex-wrap flex items-center justify-center bg-rose-950'>
      < HeroSection />
      < EventDetails />
      < RSVPForm />
      <WeddingFooter />
    </div>
    </>
  )
}

export default App
