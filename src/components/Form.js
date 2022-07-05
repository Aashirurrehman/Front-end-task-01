import React, { useEffect, useState } from 'react'
import './CSS/contact.css'


const From = () => {

    const initialValues = { name:"", email: "", subject: "", message: ""};
    const[formValues, setFormValues] = useState(initialValues);
    const[formErrors, setFormErrors] = useState({});
    const[isSubmit, setIsSumit] = useState(false);
    

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormValues({...formValues, [name]: value })
        console.log(formValues)
    }

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)

        }
    },[formErrors])

  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSumit(true);

    }

    const validate = (values) => {
        const errors = {}
        if(!values.userName){
            errors.userName = "Please Enter a Username"
        }
        if(!values.email){
            errors.email = "Please Enter an email"
        }
        if(!values.subject){
            errors.subject = "Subject is undefined"
        }
        if(!values.message){
            errors.message = "Enter a message"
        }
        return errors;
        
    }


  return (
    <>
        <form action="#"   onSubmit={handleSubmit} class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="userName" class="form-control" id="name" placeholder="Your Name" value={formValues.userName} onChange={handleChange}/>
                  </div>
                  <p className={"error-para"} >{formErrors.userName}</p>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" value={formValues.email} onChange={handleChange}/>
                  </div>
                  <p className={"error-para"}>{formErrors.email}</p>
                </div>

                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" value={formValues.subject} onChange={handleChange}/>
                </div>
                <p className={"error-para"}>{formErrors.subject}</p>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" value={formValues.message} onChange={handleChange}></textarea>
              </div>
              <p className={"error-para"}>{formErrors.message}</p>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

    </>
  )
}

export default From;