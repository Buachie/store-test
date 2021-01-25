import React, { Component } from "react";

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      
        app:{
            companyName: '',
            numHires: '',
            employerName: '',
            jobTitle: '',
            phoneNum: '',
            email: '',
            location: '',
            remote: '',
            jobDescription: ''
        }
    }
  }

  render() {
    return (
      <div>
        <h1>Hello Person</h1>
        {this.state.personalInfo.name}
      </div>
    );
  }
}

export default Person;