import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <section className="my-10 px-6 max-w-lg m-auto">
        <Link to="/jobs" className="bg-black hover:bg-gray-800 text-white text-center py-4 px-6 rounded-xl block">View All Jobs</Link>
        
        </section>
  )
}

export default ViewAllJobs