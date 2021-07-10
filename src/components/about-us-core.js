import React from "react"
import { Link } from "gatsby"
import kolenica from "../images/kolenica.jpg"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/about-us-core.css';

const AboutUsCore = ({ children }) => (
    <>
        <SEO title="За Нас" />
        < div class="about-low-area section-padding30" >
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-caption mb-50">
                            <div class="section-tittle mb-35">
                                <span>Discover Your Test</span>
                                <h2>We Provide Good Food For Your Family!</h2>
                            </div>
                            <p>Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                                <div class="single-caption mb-20">
                                    <div class="caption-icon">
                                        <span class="flaticon-restaurant"></span>
                                    </div>
                                    <div class="caption">
                                        <p>Ut enim ad minim veniam, quis nostrud exer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                                <div class="single-caption mb-20">
                                    <div class="caption-icon">
                                        <span class="flaticon-tools-and-utensils-1"></span>
                                    </div>
                                    <div class="caption">
                                        <p>Ut enim ad minim veniam, quis nostrud exer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                                <div class="single-caption mb-20">
                                    <div class="caption-icon">
                                        <span class="flaticon-hat"></span>
                                    </div>
                                    <div class="caption">
                                        <p>Ut enim ad minim veniam, quis nostrud exer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                                <div class="single-caption mb-20">
                                    <div class="caption-icon">
                                        <span class="flaticon-restaurant"></span>
                                    </div>
                                    <div class="caption">
                                        <p>Ut enim ad minim veniam, quis nostrud exer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="about-img">
                            <img src={kolenica} alt="" />
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">

                        {children}
                    </div></div>
            </div>

        </div>

    </>
)

export default AboutUsCore

