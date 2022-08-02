import React, {useState} from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';



 function Contact() {
  const [values, setValue] = useState({
    firstName: "",
    lastName: "",
    email: ""

  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValue({...values, firstName: event.target.value})
  }

  const handleLastNameInputChange = (event) => {
    setValue({...values, lastName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValue({...values, email: event.target.value})
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if (values.firstName && values.lastName && values.email) {
        setValid(true)
      }
      var templateParams = {
        fullName: values.firstName,
        email: values.lastName,
        message: 'Test message'
    };
    emailjs.send('gmail', 'template_khtqzep', templateParams, 'OHHowBOnbV7BBWnx8')
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
    });
        setSubmitted(true);
    
  }

  return (
    <>
      <img className="handPhoto" src="/public/imgs/us.png" width="500px" height="500px" />   

      <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message">Succes! Thank you for your message!</div> : null}
        <input
          disabled={submitted}
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName" />
        {submitted && !values.firstName ? <span>Please enter a first name</span> : null}
        <input
          disabled={submitted}
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="lastName" />
        {submitted && !values.lastName ? <span>Please enter a last name</span> : null}
        <input
          disabled={submitted}
          onChange={handleEmailInputChange}
          value={values.email}
          className="form-field"
          placeholder="Email"
          name="email" />
        {submitted && !values.email ? <span>Please enter an email</span> : null}
        
        <button
          className="form-field"
          type="submit">Register</button>
      </form>
    </div>
    
    </>
  )


 };


 export default Contact ;
