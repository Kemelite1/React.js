
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard"
import JobOpenings from "./components/JobOpenings"
import Navbar from "./components/Navbar"
import ViewAllJobs from "./components/ViewAllJobs"


const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>APP</h1>} />)
);

const App = () => {
  return <RouterProvider router={router} />
    
  
};

export default App