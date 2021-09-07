import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className="alu-slide">
            <div className="container">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row d-flex align-items-center p-5 ">
                                <div class="col-md-7 p-5">
                                    <h1>Cristiano Ronaldo</h1>
                                    <p>He is the best Player is the world.</p>
                                </div>
                                <div class="col-md-5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXZhXZFnU8hCvhx_Hl-rdy7Fmx3Tf2elCZA&usqp=CAU" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row d-flex align-items-center p-5 ">
                                <div class="col-md-7">
                                    <h1>Lionel Messi</h1>
                                    <p>Second Best Player in the world</p>
                                </div>
                                <div class="col-md-5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXZhXZFnU8hCvhx_Hl-rdy7Fmx3Tf2elCZA&usqp=CAU" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row d-flex align-items-center p-5 ">
                                <div class="col-md-7">
                                    <h1>Kaká</h1>
                                    <p>Most favorite player in the world.</p>
                                </div>
                                <div class="col-md-5">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXXZhXZFnU8hCvhx_Hl-rdy7Fmx3Tf2elCZA&usqp=CAU" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;