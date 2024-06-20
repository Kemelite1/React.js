import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import {  Link } from 'react-router-dom';

const JobOpening = ( { job } ) => {

    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    if (!showFullDescription && description.length > 100) {
        description = description.substring(0, 100) + '...';
    }


  return (
    <div className="bg-white rounded-xl shadow-md relative">
                    <div className="p-4"> 
                        <div className="mb-6">
                            <div className="my-2 text-gray-600">{job.type}</div>
                            <h3 className="text-xl font-bold">{job.title}</h3>
                        </div>

                        <div className="mb-5">{description}</div>

                        <button onClick={() => setShowFullDescription( (prevState) => !prevState)} className='mb-5 text-gray-500 hover:text-gray-700'>{showFullDescription ? 'Less' : 'More'}</button>

                        <h3 className="mb-2 text-gray-600">{job.salary} /Year</h3>
                        <div className="border border-gray-100 mb-5"></div>

                        <div className="mb-4 flex flex-col lg:flex-row justify-between">
                            <div className="mb-3 text-green-500">
                                <FaMapMarker className='inline mb-1 mr-1 text-lg'/>
                                {job.location}</div>
                            <Link to={`/jobs/${job.id}`} className="py-2 px-4 bg-black hover:bg-gray-700 text-white text-sm rounded-lg h-[36px] text-center">Read More</Link>
                        </div>

                    </div>
                </div>
  )
}

JobOpening.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobOpening