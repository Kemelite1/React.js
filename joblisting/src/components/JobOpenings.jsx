import { PropTypes } from 'prop-types';

import jobs from '../jobs.json'
import JobOpening from './JobOpening';

const JobOpenings = ( {isHomePage = false }) => {
    const jobslist = isHomePage ? jobs.slice(0, 3) : jobs;
    
  return (
    <section className="bg-green-200 py-10 px-4">
        <div className="m-auto lg:container container-xl">
            <h2 className="text-stone-500 text-3xl font-bold text-center mb-6">{ isHomePage ? 'Recent Jobs' : 'All Jobs'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {jobslist.map( (job) => (
                    <JobOpening key={job.id} job={job}/>
                ) )}

            </div>
        </div>
    </section>
  )
}

JobOpenings.propTypes = {
    isHomePage: PropTypes.bool
}

export default JobOpenings