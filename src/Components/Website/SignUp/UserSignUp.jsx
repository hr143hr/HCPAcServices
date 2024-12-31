import React from 'react'
import './SignUp.css'
import logol1 from '../../../assets/Image/logol1.png'
import logor1 from '../../../assets/Image/logor1.png'
import vendarlogo1 from '../../../assets/Image/Vandarsignlogo2.png'
import Servicelogo1 from '../../../assets/Image/servicesmanlogo.png'
const UserSignUp = () => {
  return (
    <section className="user min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center py-4">
              <a
                href="#"
                className="reg-logo d-flex align-items-center w-auto"
              >
                <img src={logol1} alt="" className="logol1" />
                <span className="d-none d-lg-block"><img src={logor1} alt="" className="logor1" /></span>
              </a>
            </div>
            {/* End Logo */}
            <div className="user-form mb-3">
              <div className="pb-2">
                <h5 className="card-title text-center pb-0 fs-4">
                  Create an Account
                </h5>
                <p className="text-center small">
                  Enter your personal details to create account
                </p>
              </div>
              <form className="row g-3 needs-validation" noValidate="">
                <div className="col-12">
                  <label htmlFor="yourName" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="yourName"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please, enter your name!
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourEmail" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="yourEmail"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter a valid Email adddress!
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="yourPhoneNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    id="yourEmail"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter a valid Email adddress!
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      name="terms"
                      type="checkbox"
                      defaultValue=""
                      id="acceptTerms"
                      required=""
                    />
                    <label className="form-check-label" htmlFor="acceptTerms">
                      I agree and accept the{" "}
                      <a href="#">terms and conditions</a>
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit">
                    Create Account
                  </button>
                </div>
                <div className="col-12">
                  <p className="small mb-0">
                    Already have an account?{" "}
                    <a href="/login">Log in</a>
                  </p>
                </div>
                <div className="col-12">
                  <p className="small mb-0 text-success">
                    Create a free business account?{" "}
                    {/* <a href="/login">Create an account</a> */}
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#createAccountModal"
                      style={{ cursor: "pointer" }}
                    >
                      Create an business account
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="createAccountModal"
        tabIndex="-1"
        aria-labelledby="createAccountModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6>Coose the SignUp Type</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-center justify-content-start">
                <div>
                  <a href="/vendor">
                    <img src={vendarlogo1} alt="Vendor Logo" className="modallogo" />
                  </a>
                </div>
                <div className="ms-4">
                  <a href="/vendor" className="btn btn-outline-success">Vendor SignUp!</a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end">

                <div className="me-4">
                  <a href="/serviceman" className="btn btn-outline-danger">Service Man SignUp!</a>
                </div>
                <div>
                  <a href="/vendor">
                    <img src={Servicelogo1} alt="Vendor Logo" className="modallogo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default UserSignUp