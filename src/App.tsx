
import './App.css'
import Layout from './components/Layout'
import Community from './components/sections/Community'
import Eligibility from './components/sections/Eligibility'
import Hero from './components/sections/Hero'
import Leaderboard from './components/sections/Leaderboard'
import Overview from './components/sections/Overview'
import Schools from './components/sections/Schools'

function App() {

  return (
    <main className='container-fluid'>
      <Layout>
        <Hero />
        <Overview />
        <Leaderboard />
        <Schools />
        <Community />
        <Eligibility />
      </Layout>
    </main>

  )
}

export default App
