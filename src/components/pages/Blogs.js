import React from 'react';
import {Link} from 'react-router-dom'

function Blogs() {
    return (
        <>
          <section className="blog">
                <div className="container">
                    <h2 className="blogTitle text-center">Blogs</h2>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                             <img src="https://phygital24.com/wp-content/uploads/2021/08/1-1024x576.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">How Online Ordering System For Grocery Stores Affects Grocery Retailers In India</h5>
                                <p class="card-text">this article, you will find out how online ordering system for grocery stores are affecting grocery retailers in India. Read more to learn the pros and cons of using these services.</p>
                                
                            </div>
                            <div class="card-footer text-center">
                                <Link to="/blogDetail/1" className=" btn-primary btn">Read More >></Link>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                             <img src="https://phygital24.com/wp-content/uploads/2021/08/Goals-of-grocery-ordering-system-phygital24-1-1024x576.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">5 Things Every Grocery Retailer Should Know Before Launching A Grocery Ordering System</h5>
                                <p class="card-text">Understanding what a digital footprint can do for your restaurant is one thing. Knowing how to create it is another. This article presents some basic digital footprint building steps.</p>
                                
                            </div>
                            <div class="card-footer text-center">
                                <Link to="/blogDetail/2" className=" btn-primary btn">Read More >></Link>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                             <img src="https://phygital24.com/wp-content/uploads/2021/05/Restaurant-Marketing-Practices-1024x576.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">How To Drive Profits With Best Restaurant Marketing Practices</h5>
                                <p class="card-text">We have put together a list of 5 restaurant marketing strategies that you can implement in order to reach your goal of increasing restaurant sales and that you can take advantage of right now.</p>
                                
                            </div>
                            <div class="card-footer text-center">
                                <Link to="/blogDetail/3" className=" btn-primary btn">Read More >></Link>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                             <img src="https://phygital24.com/wp-content/uploads/2021/05/Online-Food-Orders-1024x576.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">How To Get More Online Food Orders To Your Website</h5>
                                <p class="card-text">More and more restaurants are getting their food delivered online. In a world of instant gratification and choices, your restaurant should utilize online ordering in order to remain competitive.</p>
                                
                            </div>
                            <div class="card-footer text-center">
                                <Link to="/blogDetail/4" className=" btn-primary btn">Read More >></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
          </section>  
        </>
    )
}

export default Blogs
