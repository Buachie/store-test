import React, {useState, useRef} from 'react';
import firestore from '../Firebase/config'; 


/*
    const [compName, setCompName] = useState({});
    const [hires, setHires] = useState({});
    const [employer, setEmployer] = useState({});
    const [phone, setPhone] = useState({});
    const [email, setEmail] = useState({});
    const [location, setLocation] = useState({});
    const [description, setDescription] = useState({});
*/  

const Add = () => {
    const [app, setApp] = useState({
        companyName: '',
        numHires: '',
        employerName: '',
        phoneNum: '',
        email: '',
        location: '',
        jobDescription: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setApp({
            ...app,
            [e.target.name]: value
        })
    }
/*
    const test = (name) => {
        const collectionRef = firestore.collection('names');
        collectionRef.add({name})
    }
*/
    const application =(e)=>{

        const applicationRef = firestore.collection('applications');
        applicationRef.add({
            companyName: app.companyName,
            numHires: app.numHires,
            employerName: app.employerName,
            phoneNum: app.phoneNum,
            email: app.email,
            location: app.location,
            jobDescription: app.jobDescription
        });
        e.preventDefault();
        //console.log(app)
    }

    return (
        <div>
            
            <form onSubmit = {application}>
                <input type="text" name="companyName" placeholder="Company Name" value={app.companyName} onChange={handleChange} />
                <input type="number" name="numHires" placeholder="Number of Hires" value={app.numHires} onChange={handleChange} />
                <input type="text" name="employerName" placeholder="Your Name" value={app.employerName} onChange={handleChange} />
                <input type="tel" name="phoneNum" placeholder="Phone Number" value={app.phoneNum} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={app.email} onChange={handleChange} />
                <input type="text" name="location" placeholder="Location" value={app.location} onChange={handleChange} />
                <input type="text" name="jobDescription" placeholder="Job Description" value={app.jobDescription} onChange={handleChange} />
                <button type = "submit">Add</button>
            </form>
        </div>
    )
}

export default Add
