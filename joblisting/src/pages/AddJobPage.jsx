
const AddJobPage = () => {
  return (
    <section className="bg-green-50">
        <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white py-8 px-6 m-4 mb-4 rounded-md shadow-md border md:m-0">
                <form action="">
                    <h2 className="mb-6 text-3xl font-semibold text-center">Add Job</h2>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-2 font-bold text-gray-700">Job Type</label>
                        <select name="type" id="type" className="py-2 px-3 border w-full rounded" required>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="remote">Remote</option>
                            <option value="internship">Internship</option>
                            <option value="contract">Contract</option>
                            <option value="freelance">Freelance</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-gray-700 font-bold">Job Opening Name</label>
                        <input type="text" name="title" id="title" placeholder="Suite in Lagos" 
                        className="py-2 px-3 mb-2 border w-full rounded"
                         required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 text-gray-700 font-bold">Description</label>
                        <textarea name="description" id="description" placeholder="Make API calls to backend server" 
                        className="py-2 px-3 border w-full rounded" rows='4'
                        required></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="salary" className="block mb-2 text-gray-700 font-bold">Salary</label>
                        <select name="salary" id="salary" className="border w-full py-2 px-3 rounded">
                            <option value="$60K - $80K">$60K - $80K</option>
                            <option value="$80K - $100K">$80K - $100K</option>
                            <option value="$100K - $120K">$100K - $120K</option>
                            <option value="$120K - $140K">$120K - $140K</option>
                            <option value="$140K - $160K">$140K - $160K</option>
                            <option value="$160K - $180K">$160K - $180K</option>
                            <option value="$180K - $200K">$180K - $200K</option>
                            <option value="$200K - $220K">$200K - $220K</option>
                            <option value="$220K - $240K">$220K - $240K</option>
                            <option value="$240K - $260K">$240K - $260K</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="location" className="block mb-2 text-gray-700 font-bold">Location</label>
                        <input type="text" name="location" id="location" placeholder="Lagos, Nigeria"
                         className="border w-full py-2 px-3 mb-2 rounded" required />
                    </div>

                    <h3 className="mb-5 text-2xl">Company Info</h3>
                    <div className="mb-4">
                        <label htmlFor="companyName" className="block mb-2 text-gray-700 font-bold">Company Name</label>
                        <input type="text" name="company" id="company" placeholder="Google"
                         className="border w-full py-2 px-3 mb-2 rounded" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="companyDescription" className="block mb-2 text-gray-700 font-bold">Company Description</label>
                        <textarea name="companyDescription" id="companyDescription" placeholder="We are a tech company" 
                        className="border w-full py-2 px-3" rows='4' required></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contactEmail" className="block mb-2 text-gray-700 font-bold">Contact Email</label>
                        <input type="email" name="contactEmail" id="contactEmail" placeholder="contact@google.com" 
                        className="border w-full py-2 px-3 mb-2 rounded" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contactPhone" className="block mb-2 text-gray-700 font-bold">Contact Phone</label>
                        <input type="tel" name="contactPhone" id="contactPhone" placeholder="+234 123 456 7890" 
                        className="border w-full py-2 px-3 mb-2 rounded" required />
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline">Add Job</button>
                    </div>

                </form>

            </div>

        </div>
    </section>
  )
}

export default AddJobPage