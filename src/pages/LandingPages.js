import React, {Component} from "react";



import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Service from"../parts/Service";
import Footer from "../parts/Footer";
import { Portfolios, Services, Advantages, Testimonials } from "../json/landingPageData";
import Portfolio from "../parts/Portfolio";
import Advantage from "../parts/Advantage";
import Testimonial from "../parts/Testimonial";
import Discuss from "../parts/Discuss";



export default class LandingPage extends Component {
    componentDidMount(){
        window.scrollTo(0,0);
    }
 render (){
    return(
        <>
     <Header />
     <Hero/>
     <Service data={Services}/>
     <Portfolio data ={Portfolios}/>
     <Advantage data ={Advantages}/>
     <Testimonial data={Testimonials}/>
     <Discuss/>
     <Footer/>
     
     
     

        </>
    );
 }

}