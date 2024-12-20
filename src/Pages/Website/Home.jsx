import React from 'react'
import Heroimg from './../../assets/Image/Heroimg1.png'
import {Link} from 'react-router'
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
                                        Maecenas Vitae <br />
                                        Consectetur Led <br />
                                        <span className="accent-text">Climate Solutions</span>
                                    </h1>
                                    <p className="mb-4 mb-md-5">
                                        Nullam quis ante. Etiam sit amet orci eget eros faucibus
                                        tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                                        sodales sagittis magna.
                                    </p>
                                    <div className="hero-buttons">
                                        <Link to="#about" className="btn btn-primary me-0 me-sm-2 mx-1">
                                            Book Appointment Now
                                        </Link>
                                        <Link
                                            to="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                            className="btn btn-link mt-2 mt-sm-0 glightbox"
                                        >
                                            <i className="bi bi-play-circle me-1" />
                                            Play Video
                                        </Link>
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
                                        <div
                                            id="carouselExampleInterval"
                                            className="carousel slide"
                                            data-bs-ride="carousel"
                                        >
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" data-bs-interval={10000}>
                                                    <img src="..." className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item" data-bs-interval={2000}>
                                                    <img src="..." className="d-block w-100" alt="..." />
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="..." className="d-block w-100" alt="..." />
                                                </div>
                                            </div>
                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#carouselExampleInterval"
                                                data-bs-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target="#carouselExampleInterval"
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon" aria-hidden="true" />
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
                                        <i className="bi bi-trophy" />
                                    </div>
                                    <div className="stat-content">
                                        <h4>3x Won Awards</h4>
                                        <p className="mb-0">Vestibulum ante ipsum</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="bi bi-briefcase" />
                                    </div>
                                    <div className="stat-content">
                                        <h4>6.5k Faucibus</h4>
                                        <p className="mb-0">Nullam quis ante</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="bi bi-graph-up" />
                                    </div>
                                    <div className="stat-content">
                                        <h4>80k Mauris</h4>
                                        <p className="mb-0">Etiam sit amet orci</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stat-item">
                                    <div className="stat-icon">
                                        <i className="bi bi-award" />
                                    </div>
                                    <div className="stat-content">
                                        <h4>6x Phasellus</h4>
                                        <p className="mb-0">Vestibulum ante ipsum</p>
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