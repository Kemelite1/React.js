import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <HomeCard />
    </div>
  )
}

export default App