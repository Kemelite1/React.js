import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard"
import JobOpening from "./components/JobOpening"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <HomeCard />
      <JobOpening />
    </div>
  )
}

export default App