import jobs from '../jobs.json'

const JobOpening = () => {
    console.log(jobs);
  return (
    <section className="bg-green-200 py-10 px-4">
        <div className="m-auto lg:container container-xl">
            <h2 className="text-stone-500 text-3xl font-bold text-center mb-6">Browse Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* job opening 1 */}
                <div className="bg-white rounded-xl shadow-md relative">
                    <div className="p-4"> 
                        <div className="mb-6">
                            <div className="my-2 text-gray-600">Full-Time</div>
                            <h3 className="text-xl font-bold">Senior React Developer</h3>
                        </div>

                        <div className="mb-5">
                            We are seeking a senior-level React developer to join our team. 
                            The ideal candidate will have a keen eye for design and a passion for creating amazing user experiences.
                             This is a full-time position with competitive pay and benefits.
                        </div>
                        <h3 className="mb-2 text-gray-600">$70 - $80K / Year</h3>
                        <div className="border border-gray-100 mb-5"></div>

                        <div className="mb-4 flex flex-col lg:flex-row justify-between">
                            <div className="mb-3 text-yellow-300">
                                <i className="fa-solid fa-location-dot text-lg"></i>
                                Boston, MA</div>
                            <a href="" className="py-2 px-4 bg-black hover:bg-gray-700 text-white text-sm rounded-lg h-[36px] text-center">Read More</a>
                        </div>

                    </div>
                </div>
                {/* job opening 2 */}
                <div className="bg-white rounded-xl shadow-md relative">
                    <div className="p-4"> 
                        <div className="mb-6">
                            <div className="my-2 text-gray-600">Part-Time</div>
                            <h3 className="text-xl font-bold">Frontend Developer</h3>
                        </div>

                        <div className="mb-5">
                            We are seeking a frontend developer to join our team.
                            The ideal candidate will have experience with HTML, CSS, and JavaScript,
                            as well as a passion for creating user-friendly and responsive web applications.
                        </div>
                        <h3 className="mb-2 text-gray-600">$75 - $90K / Year</h3>
                        <div className="border border-gray-100 mb-5"></div>

                        <div className="mb-4 flex flex-col lg:flex-row justify-between">
                            <div className="mb-3 text-yellow-300">
                                <i className="fa-solid fa-location-dot text-lg"></i>
                                Lagos, NG</div>
                            <a href="" className="py-2 px-4 bg-black hover:bg-gray-700 text-white text-sm rounded-lg h-[36px] text-center">Read More</a>
                        </div>

                    </div>
                </div>

                {/* job opening 3 */}
                <div className="bg-white rounded-xl shadow-md relative">
                    <div className="p-4"> 
                        <div className="mb-6">
                            <div className="my-2 text-gray-600">Remote</div>
                            <h3 className="text-xl font-bold">Senior Backend Developer</h3>
                        </div>

                        <div className="mb-5">
                            We are seeking a senior-level backend developer to join our team.
                            The ideal candidate will have experience with Node.js, Python, and other server-side technologies,
                            as well as a passion for creating scalable and efficient web applications.
                        </div>
                        <h3 className="mb-2 text-gray-600">$100 - $150K / Year</h3>
                        <div className="border border-gray-100 mb-5"></div>

                        <div className="mb-4 flex flex-col lg:flex-row justify-between">
                            <div className="mb-3 text-yellow-300">
                                <i className="fa-solid fa-location-dot text-lg"></i>
                                Boston, MA</div>
                            <a href="" className="py-2 px-4 bg-black hover:bg-gray-700 text-white text-sm rounded-lg h-[36px] text-center">Read More</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default JobOpening