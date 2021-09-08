import React from 'react'

function OtherPrice() {
    return (
        <>
            <section className="Other priceSection">
                <div className="container">
                    <h2 className="text-center mainTitle">Grocery Plans</h2>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                              <div className="containerBox">
                                    <h4 className="sideText">pay as you grow</h4>    
                              </div>
                        </div>
                        <div class="col">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h2 className="price-title">Web Development</h2>
                                    <h5 className="price">$1500</h5>
                                    <p className="price-sub-title">PER MONTH/STORE</p>
                                    <p className="price-sub-title">Zero Setup Cost</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h2 className="price-title">Web & Mobile</h2>
                                    <h5 className="price">$3500</h5>
                                    <p className="price-sub-title">PER MONTH/STORE</p>
                                    <p className="price-sub-title">One time Setup cost <br /> $59,999</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="container">
                    <div className="row mt-5 align-items-center">    
                        <div className="col-lg-6">
                            <h2 className="text-success">Contact US</h2>
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
                                            <button className="btn btn-success text-white">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://phygital24.com/wp-content/uploads/2021/07/grocery-app-contact-768x505.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OtherPrice
