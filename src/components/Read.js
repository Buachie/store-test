import React, {useState, useEffect} from 'react'
import firestore from '../Firebase/config'; 
import JobCard from './JobCard';


const Read = () => {
    const [jobs, setJobs] = useState([])
    const applicationRef = firestore.collection('applications');

    //Pulls Data
    useEffect(()=> {
        applicationRef.get().then((snapshot)=>{
            snapshot.forEach((doc)=>{
                setJobs(jobs => [...jobs, doc.data()]);
                console.log(jobs);
                console.log(doc.id, " => ", doc.data());
            })
        })
        
    },[])
    
    //Display Application Data
    const displayJobs =(jobs)=>{
        jobs.map((job)=>{
            const compName = job.companyName
            const empName = job.employerName
            return `${compName}`
            
        })
    }
    

    return (
        <div className='job-list'>
            {jobs.map((job) =>(
                <div>
                    <JobCard companyName={job.companyName} jobTitle={job.jobTitle} jobDescription={job.jobDescription} />
                </div>
    
            )   
            )}
        </div>
    )
}

export default Read
