import { useParams, useLoaderData } from 'react-router-dom'

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (  
        <h1 className='text-4xl mb-4'>{job.title}</h1>
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