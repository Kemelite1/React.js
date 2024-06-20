import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState();
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const fetchJob = async () => {
      try{
        const response = await fetch(`/api/jobs/${id}`);
        const data = await response.json();
        setJob(data);
      }catch(error){
        console.log('Error fetching jobs', error);
      } finally{
        setLoading(false);
      }
    }
    fetchJob();

  }, []);


  return (
    loading ? <Spinner /> : (
      
        <h1 className='text-4xl mb-4'>{job.title}</h1>
    )
  )
}

export default JobPage