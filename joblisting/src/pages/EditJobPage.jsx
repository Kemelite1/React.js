import { useState } from 'react';
import { useParams, useLoaderData,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ( { updateJobSubmit }) => {
    const job = useLoaderData();
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [location, setLocation] = useState(job.location);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

    const submitForm = (e) => {
        e.preventDefault();
        
        const updatedJob = {
            id,
            title,
            type,
            description,
            location,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone

            },
            
        };
        updateJobSubmit(updatedJob);
        toast.success('Job Updated Successfully');
        return navigate(`/jobs/${id}`);
    };
    
  return (

    <section className="bg-green-50">
        <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white py-8 px-6 m-4 mb-4 rounded-md shadow-md border md:m-0">
                <form onSubmit={submitForm}>
                    <h2 className="mb-6 text-3xl font-semibold text-center">Update Job</h2>
                    <div className="mb-4">
                        <label htmlFor="type" className="block mb-2 font-bold text-gray-700">Job Type</label>
                        <select name="type" id="type" className="py-2 px-3 border w-full rounded" value={type}
                         onChange={(e) => setType(e.target.value)} required>
                            <option value="full-time">Full Time</option>
                            <option value="part-time">Part Time</option>
                            <option value="Remote">Remote</option>
                            <option value="internship">Internship</option>
                            <option value="contract">Contract</option>
                            <option value="freelance">Freelance</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="block mb-2 text-gray-700 font-bold">Job Opening Name</label>
                        <input type="text" name="title" id="title" placeholder="Suite in Lagos" 
                        className="py-2 px-3 mb-2 border w-full rounded" value={title}
                        onChange={(e) => setTitle(e.target.value)}
                         required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block mb-2 text-gray-700 font-bold">Description</label>
                        <textarea name="description" id="description" placeholder="Make API calls to backend server" 
                        className="py-2 px-3 border w-full rounded" rows='4' value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="salary" className="block mb-2 text-gray-700 font-bold">Salary</label>
                        <select name="salary" id="salary" className="border w-full py-2 px-3 rounded" value={salary}
                         onChange={(e) => setSalary(e.target.value)}>
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
                         className="border w-full py-2 px-3 mb-2 rounded" value={location}
                         onChange={(e) => setLocation(e.target.value)} required />
                    </div>

                    <h3 className="mb-5 text-2xl">Company Info</h3>
                    <div className="mb-4">
                        <label htmlFor="companyName" className="block mb-2 text-gray-700 font-bold">Company Name</label>
                        <input type="text" name="company" id="company" placeholder="Google"
                         className="border w-full py-2 px-3 mb-2 rounded" value={companyName}
                         onChange={(e) => setCompanyName(e.target.value)} required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="companyDescription" className="block mb-2 text-gray-700 font-bold">Company Description</label>
                        <textarea name="companyDescription" id="companyDescription" placeholder="We are a tech company" 
                        className="border w-full py-2 px-3" rows='4'
                        value={companyDescription}
                         onChange={(e) => setCompanyDescription(e.target.value)} required></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contactEmail" className="block mb-2 text-gray-700 font-bold">Contact Email</label>
                        <input type="email" name="contactEmail" id="contactEmail" placeholder="contact@google.com" 
                        className="border w-full py-2 px-3 mb-2 rounded" value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)} required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contactPhone" className="block mb-2 text-gray-700 font-bold">Contact Phone</label>
                        <input type="tel" name="contactPhone" id="contactPhone" placeholder="+234 123 456 7890" 
                        className="border w-full py-2 px-3 mb-2 rounded" value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)} required />
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline">Update Job</button>
                    </div>

                </form>

            </div>

        </div>
    </section>


  )
}

export default EditJobPage