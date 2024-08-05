import React, { useState, useEffect } from 'react';
//import { DiscussForm } from 'parts/DiscussForm';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import { DiscussForm } from '../parts/DiscussForm';
//import './assets/css/fromstyle.css'



export const DiscussProjectPage = () => {
    const [data, setData] = useState({

    name: '',
    //company: '',
    email: '',
   // phone: '',
    projectIdea: '',

    });

    useEffect(() => {
        window.scroll(0, 0);
      }, []);


      const onChange = (event) => {
        setData((prevData) => ({
          ...prevData,
          [event.target.name]: event.target.value,
        }));
      };

      const resetForm = () => {
        setData({
          name: '',
          //company: '',
          email: '',
         // phone: '',
          projectIdea: '',
        });
      };

      return(
        <>
        <Header/>
         <DiscussForm data = {data} onChange ={onchange} resetForm={resetForm}/>
        <Footer/>
        </>
      );
};