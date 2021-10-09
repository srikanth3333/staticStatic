import React, {useState,useEffect,useRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Link} from 'react-router-dom';
import f from './img/s_f.png'
import s from './img/customize.png'
import t from './img/business.png'
import fir from './img/01.png'
import sec from './img/02.png'
import thi from './img/03.png'
import fou from './img/04.png'
import fiv from './img/05.png'
import six from './img/06.png'
import ass1 from './img/ass1.png'
import ass2 from './img/ass2.png'
import ass3 from './img/ass3.png'
import fact1 from './img/fact1.png'
import fact2 from './img/fact2.png'
import fact3 from './img/fact3.png'
import fact4 from './img/fact4.png'
import download from './img/download.png'


const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={fir} data-value="1" className="item" onDragStart={handleDragStart} />,
    <img src={sec} data-value="2" className="item" onDragStart={handleDragStart} />,
    <img src={thi} data-value="3" className="item" onDragStart={handleDragStart} />,
    <img src={fou} data-value="4" className="item" onDragStart={handleDragStart} />,
    <img src={fiv} data-value="5" className="item" onDragStart={handleDragStart} />,
    <img src={six} data-value="6" className="item" onDragStart={handleDragStart} />,
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

function MainHome() {


    const percent = 0.3;
    const section = useRef(null);
    const [padding, setPadding] = useState(0);

    const syncState = () => {
        const { current } = section;
        if (current) {
            setPadding(current.offsetWidth * percent);
        }
    };

    useEffect(syncState, []);


    return (
        <>
            <div className="main_home">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1>Rocket your revenue with ordering Apps/Website</h1>
                            <p className="sub_text">We know how people struggle to take business online We built a hoity-toity online application solution which you can start selling from the same day of store registration. Your offline business can bring to Online to make High Profits</p>
                            <button className="btn-secondary">Read More</button>
                        </div>
                        <div className="col-lg-6">
                            <img src={f} alt="" className="banner__img img-fluid mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="fea">
                <div className="container">
                    <h2 className="my-4 h3 text-center">We have readymade On-demand Ordering Apps for you Business to sell online.</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src={ass1} alt="" className="img-icon" />
                                    <h6 className="card__h">Product</h6>
                                    <p className="card__p">Start selling yout own product. <br /> You can also sell the product by trading make more profits without investments.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src={ass2} alt="" className="img-icon" />
                                    <h6 className="card__h">Services</h6>
                                    <p className="card__p">Start selling your own services to make more revenue. <br /> You can also sell the services by managing your team who can work behalf of you</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src={ass3} alt="" className="img-icon" />
                                    <h6 className="card__h">Customized</h6>
                                    <p className="card__p">Start selling your own customized products. <br /> You can also sell the different customized products and services by trading.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="work">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src={t} className="mx-auto d-block img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h5 className="work__h" >Make Business Easy With Us</h5>
                            <div className="row my-4">
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Your Own App</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Online Payments / COD</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Instant reports</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Customizable Landing Pages</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Make Order Process Easy</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Restrict the employee roles</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Get All the your relevent notifications</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video">
                <div className="container text-center">
                    <h2 className="vide__h">Watch <span className="primary__color">Video</span></h2>
                    <p className="center__p">Developed Readymade Ordering Apps for Your Businesses to sell online, find new customers worldwide and make profits</p>
                    <div className="row my-5 justify-content-center">
                        <div className="col-lg-6">
                        <img src="https://fox-landing-page.netlify.app/assets/img/mobile-4-4.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="app_fea">
                <div className="container text-center">
                    <h2 className="vide__h">Awesome <span className="primary__color">Screenshots</span></h2>
                    <p className="center__p">Start Selling on your own online applications without hassle free from the same day of store signup.</p>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <AliceCarousel   paddingRight={padding}  onResized={syncState}  disableDotsControls={true} disableButtonsControls={true} mouseTracking items={items}  responsive={responsive}/>
                        </div>
                    </div>
                </div>
            </section>



            <section className="facts">
                <div className="container text-center">
                    <h2 className="fun_h">Fun<span className="text-white">Facts</span></h2>
                    {/* <p className="center__p">Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.</p> */}
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src={fact1} className="facts__icon" alt="" />
                                    <h6 className="facts_head"> 225</h6>
                                    <p className="facts_p">Coffee Cups</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src={fact2} className="facts__icon" alt="" />
                                    <h6 className="facts_head"> 225</h6>
                                    <p className="facts_p">Coffee Cups</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src={fact3} className="facts__icon" alt="" />
                                    <h6 className="facts_head"> 225</h6>
                                    <p className="facts_p">Coffee Cups</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src={fact4} className="facts__icon" alt="" />
                                    <h6 className="facts_head"> 225</h6>
                                    <p className="facts_p">Coffee Cups</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trail">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5">
                            <h5 className="work__h">Download our free trial App</h5>
                            <p>Own your online applications for your business with the cheapest one time cost that you spent</p>
                            <div className="row">
                                <div className="col-lg-4">
                                    <p><button  className="trail_btn" onClick={() => alert("We are working on it")}>APP STORE</button> </p>
                                </div>
                                <div className="col-lg-5">
                                    <p><button className="trail_btn">GOOGLE PLAY</button></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <img src={download} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="touch">
                <div className="container">
                    <div className="text-center">
                        <h2 className="vide__h">Get <span className="primary__color">in</span> touch</h2>
                        <p className="center__p">Launch Your Business/Store Online…! We already have solution for you…! Ask Us How????</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <form >
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Enter your contact number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Enter your subject" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="" className="form-control" id="" placeholder="Enter your message" cols="20" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <button className="btn btn-color-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainHome
