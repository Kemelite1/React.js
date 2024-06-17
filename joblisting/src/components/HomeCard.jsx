
const HomeCard = () => {
  return (
    <section className="py-4">
    <div className="lg:container container-xl m-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">For Software Engineers</h2>
                <p className="mb-4 mt-2">Search our software development jobs and find your match</p>
                <a href="" className="bg-black text-white hover:bg-gray-700 px-4 py-2 rounded-lg inline-block">Search Jobs</a>
            </div>

            <div className="bg-gray-300 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">For Employers</h2>
                <p className="mb-4 pt-2">Post a job and find the best software developers</p>
                <a href="" className="bg-gray-700 text-white hover:bg-gray-500 px-4 py-2 rounded-lg inline-block">Post a Job</a>
            </div>

        </div>

    </div>
    
    </section>
  )
}

export default HomeCard