import React,{useEffect, useState} from 'react'
import Navigation from './components/NavigationBar'
import JobCard from './components/JobCard'
import { useHistory, useLocation } from "react-router-dom";

const QUERYSTR_PREFIX = "q";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BACKEND_SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL


export default function Jobs() {
  let history = useHistory();
  let query = useQuery();

    const [jobs, setJobs] = useState([])
    const [originalJobs, setOriginalJobs] = useState([])
    let [keyword, setKeyword] = useState(query.get(QUERYSTR_PREFIX));

    const getData = async () => {
        let url =`${BACKEND_SERVER_URL}/jobs/`;
        let data = await fetch(url);
        let result = await data.json();
        console.log(result)
        setJobs(result);
        setOriginalJobs(result)
      };
    
      const handleSearch = (event) => {
        let filteredJobs = originalJobs;
        if (event) {
          event.preventDefault();
          history.push(`/jobs/?${QUERYSTR_PREFIX}=${encodeURIComponent(keyword)}`);
        }
        if (keyword) {
          filteredJobs = originalJobs.filter(job =>
            job.title.toLowerCase().includes(keyword.toLowerCase())
          );
        }
        setJobs(filteredJobs);
      };

     useEffect(() => {
        getData();
      }, []);
    



    return (
        <div>
       <Navigation handleSearch={handleSearch} keyword={keyword} setKeyword={setKeyword}></Navigation>
       <div id="job-list"><center><span id="job-headline">6 IT Jobs in Vietnam for you</span></center>
       <div id="job-list-check">{jobs && jobs.map((job) => <JobCard job={job} id={job.id}/>)}</div>
       </div>
        </div>
    )
}
