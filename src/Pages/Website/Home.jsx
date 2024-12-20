import React from 'react'
import Heroimg from './../../assets/Image/Heroimg1.png'
import Slider1 from '../../assets/Image/BUY.png'
import Slider2 from '../../assets/Image/BooK.png'
import icon1 from '../../assets/Image/icon1.png'
import icon2 from '../../assets/Image/fact-icon-2.png'
import icon3 from '../../assets/Image/fact-icon-3.png'
import icon4 from '../../assets/Image/fact-icon-4.png'

import { Link } from 'react-router'
const Home = () => {
    return (
        <main>
            <>
                {/* Hero Section */}
                <section id="hero" className="hero section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="hero-content" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="company-badge mb-4">
                                        <i className="bi bi-gear-fill me-2 rotating-gear" />
                                        Conditioning Experts.
                                    </div>
                                    <h1 className="mb-4">
                                        Air control <br />
                                        innovations <br />
                                        <span className="accent-text">Climate Solutions</span>
                                    </h1>
                                    {/* <p className="mb-4 mb-md-5">
                                        Nullam quis ante. Etiam sit amet orci eget eros faucibus
                                        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                                        sodales sagittis magna.
                                    </p> */}
                                    <div className="hero-buttons">
                                        <Link to="#about" className="btn btn-primary me-0 me-sm-2 mx-1">
                                            Bye Now
                                        </Link>
                                        <Link to="#about" className="btn btn-warning me-0 me-sm-2 mx-1">
                                            Book Now
                                        </Link>
                                        {/* <Link
                                            to="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                            className="btn btn-link mt-2 mt-sm-0 glightbox"
                                        >
                                            <i className="bi bi-play-circle me-1" />
                                            Play Video
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero-image" data-aos="zoom-out" data-aos-delay={300}>
                                    <img
                                        src={Heroimg}
                                        alt="Hero Image"
                                        className="img-fluid"
                                    />
                                    <div className="customers-badge">
                                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                                            <div className="carousel-inner myslider">
                                                <div className="carousel-item active">
                                                    <img src={Slider1} className="d-block w-100" alt="BUY NOW" />
                                                    <div className="carousel-caption d-none d-md-block"></div>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src={Slider2} className="d-block w-100" alt="BOOK NOW" />
                                                    <div className="carousel-caption d-none d-md-block"></div>
                                                </div>
                                            </div>
                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target="#carouselExampleCaptions"
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="row stats-row gy-4 mt-5"
                            data-aos="fade-up"
                            data-aos-delay={500}
                        >
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">

                                        <img src={icon1} alt="icon" />
                                    </div>
                                    <div className="stat-content">
                                        <h4>25 Member</h4>
                                        <p className="mb-0"> Professional</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                    <img src={icon2} alt="icon" />
                                    </div>
                                    <div className="stat-content">
                                        <h4>30 Project</h4>
                                        <p className="mb-0">Completed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                    <img src={icon3} alt="icon" />
                                    </div>
                                    <div className="stat-content">
                                        <h4>4 Total</h4>
                                        <p className="mb-0">Branches</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                    <img src={icon4} alt="icon" />
                                    </div>
                                    <div className="stat-content">
                                    <h4>30 Client</h4>
                                    <p className="mb-0">Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Hero Section */}
            </>



        </main>
    )
}

export default Home