import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
            <footer>
                <div class="row my-3 justify-content-center py-3">
                    <div class="col-11">
                        <div class="row ">
                            <div class="col-lg-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                                <h3 class="text-muted mb-md-0 mb-5 bold-text">Prothom Alu.</h3>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                                <ul class="list-unstyled">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Blog</li>
                                    <li>Portfolio</li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 col-12">
                                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                                <p class="mb-1">Chakmarkul, Ramu</p>
                                <p>Cox's Bazar</p>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-lg-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                                <p class="social text-muted mb-0 pb-0 bold-text">
                                    <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span>
                                    <span class="mx-2"><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                                    <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                                    <span class="mx-2"><i class="fa fa-instagram" aria-hidden="true"></i></span>
                                </p><small class="rights"><span>&#174;</span> Prothom Alu All Rights Reserved.</small>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                                <h6 class="mt-55 mt-2 text-muted bold-text"><b>Minhazul Abedin</b></h6><small> <span><i class="fa fa-envelope" aria-hidden="true"></i></span> minhazulabedin44@gmail.com</small>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                                <h6 class="text-muted bold-text"><b></b></h6><small><span><i class="fa fa-envelope" aria-hidden="true"></i></span> abedinminhazul19@gmail.com</small>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;