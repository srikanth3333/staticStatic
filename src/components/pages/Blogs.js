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
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                
                            </div>
                            <div class="card-footer text-center">
                                <Link to="/blogDetail" className=" btn-primary btn">Read More >></Link>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                             <img src="https://phygital24.com/wp-content/uploads/2021/08/Goals-of-grocery-ordering-system-phygital24-1-1024x576.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a short card.This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                
                            </div>
                            <div class="card-footer text-center">
                                <Link to="/blogDetail" className=" btn-primary btn">Read More >></Link>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                             <img src="https://phygital24.com/wp-content/uploads/2021/05/Restaurant-Marketing-Practices-1024x576.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                
                            </div>
                            <div class="card-footer text-center">
                                <Link to="/blogDetail" className=" btn-primary btn">Read More >></Link>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                             <img src="https://phygital24.com/wp-content/uploads/2021/05/Online-Food-Orders-1024x576.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                
                            </div>
                            <div class="card-footer text-center">
                                <Link to="/blogDetail" className=" btn-primary btn">Read More >></Link>
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
