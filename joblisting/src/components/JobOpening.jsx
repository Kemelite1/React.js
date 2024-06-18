import { PropTypes } from 'prop-types'


const JobOpening = ( { job } ) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
                    <div className="p-4"> 
                        <div className="mb-6">
                            <div className="my-2 text-gray-600">{job.type}</div>
                            <h3 className="text-xl font-bold">{job.title}</h3>
                        </div>

                        <div className="mb-5">
                            {job.description}
                        </div>
                        <h3 className="mb-2 text-gray-600">{job.salary} /Year</h3>
                        <div className="border border-gray-100 mb-5"></div>

                        <div className="mb-4 flex flex-col lg:flex-row justify-between">
                            <div className="mb-3 text-yellow-300">
                                <i className="fa-solid fa-location-dot text-lg"></i>
                                {job.location}</div>
                            <a href={`/job/${job.id}`} className="py-2 px-4 bg-black hover:bg-gray-700 text-white text-sm rounded-lg h-[36px] text-center">Read More</a>
                        </div>

                    </div>
                </div>
  )
}

JobOpening.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobOpening