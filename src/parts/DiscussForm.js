import React, { useEffect,useState } from "react";

import { Fade } from "react-awesome-reveal";
import * as emailjs from '@emailjs/browser';
//import { ToastContainer, toast } from 'react-toastify';
//import {Form} from "../elements/Form";
//import Button from "../elements/Button";
import 'react-toastify/dist/ReactToastify.css';
//import InputField from "./InputFiled";
//import TextareaField from "./TextareaFiled";
//import './assets/css/fromstyle.css'


//import {ChevronRightIcon} from '@heroicons/react/solid';

const SERVICE_ID = "service_dub5ikq";
const  TEMPLATE_ID =  "template_7wiftsr";
const  PUBLIC_KEY = "2Ylj78_1kFOvdaLec";
 export const DiscussForm = ( actions) =>  {
  /*
  const [values, setValues] =  useState({
     fullName: '',
     email: '',
     message: ''
 });
 */

    
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  };

/*
  const [status, setStatus] = useState('');

  const handleSubmit = (e) =>  {
    e.preventDefault();
    emailjs.send(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
    .then(response => {
      console.log('SUCCESS!', response);
      setValues({
        fullName: '',
        email: '',
       
        message: ''
      });

      setStatus('SUCCESS');
    },   error => {
      console.log('FAILED...', error);
    }
    
  );
  }


  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
    */

  return (
    /*
    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold">Send us message</h3>
        <InputField value={values.fullName} handleChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="John Doe" />
        <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="jphn@example.com" />
       
        <TextareaField value={values.message} handleChange={handleChange} label="Your message here" name="message" />
        <button type="submit"
          className="mt-4 bg-gray-900 text-gray-200 rounded hover:bg-gray-700 px-4 py-2 focus:outline-none"
        >Send <ChevronRightIcon className="w-6 ml-2 float-right" />
        </button>
      </form>
    </div>
    */

    <div style={{width:'100vw', height: '100vh', display:'flex'}}>
            <form class="formContainer" onSubmit={handleOnSubmit}>
                <h2>Send me a message. Let's have a chat!</h2>
                <div class="formElement">
                    <label for="from_name">Name</label>
                    <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
                </div>

                <div class="formElement">
                    <label>E-mail</label>
                    <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
                </div>

                <div class="formElement">
                    <label for="message">Message</label>
                    <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
                </div>
                <button type='submit' className='formButton'>Submit</button>
            </form>
        </div>
  )
}
/*
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>your message submitted successfully</p>
  </div>
)
*/
export default DiscussForm 

 
