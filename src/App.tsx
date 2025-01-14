
import './App.css'
import Community from './components/sections/Community'
import Eligibility from './components/sections/Eligibility'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import Leaderboard from './components/sections/Leaderboard'
import Nav from './components/sections/Nav'
import Overview from './components/sections/Overview'
import Schools from './components/sections/Schools'

function App() {

  return (
    <div className='container-fluid'>
      <Nav />
      <Hero />
      <Overview />
      <Leaderboard />
      <Schools />
      <Community />
      <Eligibility />
      <Footer />
    </div>

  )
}

export default App
