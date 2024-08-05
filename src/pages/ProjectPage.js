import React, { Component } from 'react';
import Header from "../parts/Header";
import HeroPortfolio from '../parts/HeroPortfolio';
import AllPortfolio from '../parts/AllPortfolio';
import { Portfolios } from '../json/landingPageData';
import Discuss from '../parts/Discuss';
import Footer from '../parts/Footer';



export default class ProjectPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }

      render(){
        return(
            <> 

            <Header/>
            <HeroPortfolio/>
            <AllPortfolio data={Portfolios}/>
            <Discuss/>
            <Footer/>


            </>
        );
      }
}