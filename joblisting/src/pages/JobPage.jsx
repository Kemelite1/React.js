import { FaArrowLeft, FaLocationDot } from 'react-icons/fa6';
import { useParams, useLoaderData, Link } from 'react-router-dom'

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (  
        <>
        {/* Go back */}
        <section>
          <div className='container m-auto py-6 px-6'>
            <Link to='/jobs' className='flex items-center text-black hover:text-indigo-700'>
            <FaArrowLeft className='mr-2' /> Back to Jobs Page
            </Link>
          </div>
        </section>

        <section className='bg-green-50'>

          <div className='container py-10 px-6 m-auto'>

            <div className='grid grid-cols-1 md:grid-cols-70/30 gap-6 w-full '>

              <main>
                <div className='bg-white text-center p-6 rounded-lg md:text-left shadow-md'>
                  <div className='mb-4 text-gray-500'>Full-Time</div>
                  <h1 className='mb-4 text-3xl font-bold'>Senior Front-end Developer</h1>

                  <div className='flex justify-center align-middle md:justify-start text-gray-500 mb-4'>
                    <FaLocationDot className='mr-2 text-green-500 text-lg' />
                    <p className='text-green-500'>Lagos, NG</p>
                  </div>
                </div>

                <div className='bg-white p-6 mt-6 rounded-lg shadow-md'>
                  <h3 className='text-gray-700 font-bold text-lg mb-6'>Job Description</h3>
                  <p className='mb-4'>We are seeking a senior Front-end developer to join our team.
                  The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.
                  </p> 
                  <h3 className='text-gray-700 font-bold text-lg mb-2'>Salary</h3>
                  <p className='mb-4'>$80k - $100K / Year</p>
                </div>


              </main>

              {/* sidebar */}
              <aside>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                  <h3 className='mb-6 text-xl font-bold'>Company Info</h3>
                  <h2 className='text-2xl'>Teencoders Techhub</h2>
                  <p className='my-2'>Teencoders Techhub is a tech company that provides tech solutions to businesses and individuals</p>
                  <hr className='my-4' />
                  <h3 className='text-xl'>Contact Email:</h3>
                  <p className='my-2 p-2 font-bold bg-gray-100 rounded-lg'>teencoders@hub.com</p>
                  <h3 className='text-xl'>Contact Phone:</h3>
                  <p className='my-2 p-2 font-bold bg-gray-100 rounded-lg'>08123456789</p>
                </div>

                <div className='bg-white p-6 mt-6 rounded-lg shadow-md'>
                  <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                  <Link to='add-jobs' className='block text-center py-2 px-4 mt-4 w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-full focus:outline-none focus:shadow-outline'>Edit Job</Link>
                  <button className='block py-2 px-4 text-center mt-4 bg-red-500 hover:bg-red-600 w-full text-white font-bold rounded-full focus:outline-none focus:shadow-outline'>Delete</button>

                </div>

              </aside>
            </div>

          </div>
        </section>

        </>
    )
  
};

const jobLoader = async ( { params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default,  jobLoader };




// const [job, setJob] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect (() => {
  //   const fetchJob = async () => {
  //     try{
  //       const response = await fetch(`/api/jobs/${id}`);
  //       const data = await response.json();
  //       setJob(data);
  //     }catch(error){
  //       console.log('Error fetching jobs', error);
  //     } finally{
  //       setLoading(false);
  //     }
  //   }
  //   fetchJob();

  // }, []);