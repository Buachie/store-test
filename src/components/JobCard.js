import React from 'react'

const JobCard = (props) => {
    return (
        <div className='card-body'>
            <div className="side-img">
                
            </div>
            <div className="job-info">
                <h3 className="company-name">{props.companyName}</h3>
                <h2 className="job-title">{props.jobTitle}</h2>
                <p className="job-description">{props.jobDescription}</p>
            </div>
        </div>
    )
}

export default JobCard
