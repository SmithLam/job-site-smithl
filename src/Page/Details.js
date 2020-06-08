import React,{useState, useEffect} from 'react'
import Navigation from './components/NavigationBar'
import {useParams} from 'react-router-dom'

const BACKEND_SERVER_URL = process.env.REACT_APP_BACKEND_SERVER_URL

export default function Details(props) {

    const {id} = useParams()
    const [Jobs, setJobs] = useState(null)
    console.log("what is props", props)


    const getData = async () => {
        let url =`${BACKEND_SERVER_URL}/jobs/${id}`;
        let data = await fetch(url);
        let result = await data.json();
        console.log(result)
        // setJobs("show result", result);
      };
    
     useEffect(() => {
        getData();
      }, []);
    


    return (
        <div>
            <Navigation/>
            <h1>This is Detail page</h1>
            <h2>Your ID is {id}</h2>
        </div>
    )
}
