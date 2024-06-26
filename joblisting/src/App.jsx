
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import PageNotFound from "./pages/PageNotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";



const App = () => {
// making post request to backend to add job
  const addJob = async  (newJob) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
    
  };

  // making request to the backend to delete job
  const deleteJob = async (id) =>{
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;

  };

  // making request to the backend to update job

  const updateJob = async (job) => {
    const response =  await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  }

  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path="/jobs-edit/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path="/add-job" element={<AddJobPage submitJob={addJob} />} />
      <Route path="*" element={<PageNotFound />} />
  
      </Route>
    )
  );

  return <RouterProvider router={router} />
  
};

export default App