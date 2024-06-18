import jobs from '../jobs.json'
import JobOpening from './JobOpening';

const JobOpenings = () => {
    const recentJobs = jobs.slice(0, 3);
    
  return (
    <section className="bg-green-200 py-10 px-4">
        <div className="m-auto lg:container container-xl">
            <h2 className="text-stone-500 text-3xl font-bold text-center mb-6">Browse Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {recentJobs.map( (job) => (
                    <JobOpening key={job.id} job={job}/>

                ) )}

            </div>
        </div>
    </section>
  )
}

export default JobOpenings