import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard"
import JobOpenings from "./components/JobOpenings"
import Navbar from "./components/Navbar"
import ViewAllJobs from "./components/ViewAllJobs"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <HomeCard />
      <JobOpenings />
      <ViewAllJobs />
    </div>
  )
}

export default App