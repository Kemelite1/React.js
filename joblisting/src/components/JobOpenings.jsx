import { PropTypes } from 'prop-types';
import { useState, useEffect } from 'react';
import JobOpening from './JobOpening';
import Spinner from './Spinner';


const JobOpenings = ( {isHomePage = false }) => {
    const [jobsList, setJobsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>  {
        const fetchJobs = async () => {
            const apiUrl = isHomePage ? '/api/jobs?_limit=3' : '/api/jobs';
            try{
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobsList(data);
            }catch(error) {
                console.log('Error fetching jobs', error);
            }finally {
                setLoading(false);
            }

        }
        fetchJobs();
    }, [])
    
  return (
    <section className="bg-green-200 py-10 px-4">
        <div className="m-auto lg:container container-xl">
            <h2 className="text-stone-500 text-3xl font-bold text-center mb-6">{ isHomePage ? 'Recent Jobs' : 'All Jobs'}</h2>

                {loading ? ( 
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobsList.map( (job) => (
                    <JobOpening key={job.id} job={job}/>
                ) )}
                    </div>
                )}

            </div>
    </section>
  )
}

JobOpenings.propTypes = {
    isHomePage: PropTypes.bool
}

export default JobOpenings