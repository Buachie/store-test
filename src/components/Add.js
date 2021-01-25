import React, {useState, useRef} from 'react';
import firestore from '../Firebase/config'; 


const Add = () => {
    const [app, setApp] = useState({
        companyName: '',
        numHires: '',
        employerName: '',
        jobTitle: '',
        phoneNum: '',
        email: '',
        location: '',
        remote: '',
        jobDescription: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setApp({
            ...app,
            [e.target.name]: value
        })
    }

    const application =(e)=>{
        
        const applicationRef = firestore.collection('applications');
        applicationRef.add({
            companyName: app.companyName,
            numHires: app.numHires,
            employerName: app.employerName,
            jobTitle: app.jobTitle,
            phoneNum: app.phoneNum,
            email: app.email,
            location: app.location,
            remote: app.remote,
            jobDescription: app.jobDescription
        });
        e.preventDefault();
        console.log(app)
    }

    return (
        <div>
            <form onSubmit = {application}>
                <input className="text-box" type="text" name="companyName" placeholder="Company Name" value={app.companyName} onChange={handleChange} />
                
                <input className="text-box" type="number" name="numHires" placeholder="Number of Hires" value={app.numHires} onChange={handleChange} />
                
                <input className="text-box" type="text" name="employerName" placeholder="Your Name" value={app.employerName} onChange={handleChange} />
                
                <input className="text-box" type="text" name="jobTitle" placeholder="Job Title" value={app.jobTitle} onChange={handleChange} />
                
                <input className="text-box" type="tel" name="phoneNum" placeholder="Phone Number" value={app.phoneNum} onChange={handleChange} />
                
                <input className="text-box" type="email" name="email" placeholder="Email" value={app.email} onChange={handleChange} />
                
                <input className="text-box" type="text" name="location" placeholder="Location" value={app.location} onChange={handleChange} />
                <p>Is this a remote position?</p>
                <select className="text-box" name="remote" onChange={handleChange}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                
                <textarea className="text-box" name="jobDescription" placeholder="Job Description" value={app.jobDescription} onChange={handleChange} cols="30" rows="10"></textarea>
                
                <button type = "submit">Add</button>
            </form>
        </div>
    )
}

export default Add
