import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard"
import JobOpenings from "./components/JobOpenings"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <HomeCard />
      <JobOpenings />
    </div>
  )
}

export default App