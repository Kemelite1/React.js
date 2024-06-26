import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobOpenings from '../components/JobOpenings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobOpenings isHomePage={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage