import React from 'react'

function Contact() {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <div className="main-text text-center">
                        <h2>Get In Touch</h2>
                    </div>
                    <div className="row justify-content-center flip-box-pad">
                        <div className="col-lg-3">
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="https://phygital24.com/wp-content/uploads/2021/08/ordering-app-Meat-300x173.png" alt="Paris" className="img-fluid" />
                                        <h3>Meat Store</h3>
                                    </div>
                                    <div className="flip-box-back">
                                        <p>Own Your Market with an App of your Own. Get an App to Your Restaurant and acquire permanent customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="https://phygital24.com/wp-content/uploads/2021/08/ordering-app-grocery-300x173.png" alt="Paris" className="img-fluid" />
                                        <h3>Meat Store</h3>
                                    </div>
                                    <div className="flip-box-back">
                                        <p>Own Your Market with an App of your Own. Get an App to Your Restaurant and acquire permanent customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="flip-box">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <img src="https://phygital24.com/wp-content/uploads/2021/08/ordering-app-Meat-300x173.png" alt="Paris" className="img-fluid" />
                                        <h3>Meat Store</h3>
                                    </div>
                                    <div className="flip-box-back">
                                        <p>Own Your Market with an App of your Own. Get an App to Your Restaurant and acquire permanent customers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 align-items-center">
                        <div className="col-lg-6">
                            <img src="https://phygital24.com/wp-content/uploads/2021/02/Contact-Usm-1024x785.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="">First Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="">First Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Mobile Number</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Email</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Store Name / URL</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Specify your query</label>
                                            <textarea name="" className="form-control" id="" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center">
                                        <div className="form-group">
                                            <button className="btn btn-danger">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="numbers">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <h2>INDIA (Place 1)</h2>
                            <p>+91 9999999999 info@gmail.com</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio nihil nulla perspiciatis qui.</p>
                        </div>
                        <div className="col-lg-5">
                            <h2>INDIA (Place 2)</h2>
                            <p>+91 9999999999 info@gmail.com</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio nihil nulla perspiciatis qui.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
