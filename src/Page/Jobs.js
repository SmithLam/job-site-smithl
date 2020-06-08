import React,{useEffect, useState} from 'react'
import Navigation from './components/NavigationBar'
import JobCard from './components/JobCard'


const BACKEND_SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL


export default function Jobs() {

    const [jobs, setJobs] = useState([])


    const getData = async () => {
        let url =`${BACKEND_SERVER_URL}/jobs/`;
        let data = await fetch(url);
        let result = await data.json();
        console.log(result)
        setJobs(result);
      };
    
     useEffect(() => {
        getData();
      }, []);
    



    return (
        <div>
       <Navigation></Navigation>
       <div id="job-list"><center><span id="job-headline">6 IT Jobs in Vietnam for you</span></center>
       <div id="job-list-check">{jobs && jobs.map((job) => <JobCard job={job} id={job.id}/>)}</div>
       
       
       </div>
        </div>
    )
}
