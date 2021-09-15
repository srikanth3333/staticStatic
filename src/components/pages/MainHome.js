import React, {useState,useEffect,useRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Link} from 'react-router-dom';
import f from './img/s_f.png'
import s from './img/customize.png'


const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="https://fox-landing-page.netlify.app/assets/img/mobile-5.png" data-value="1" className="item" onDragStart={handleDragStart} />,
    <img src="https://fox-landing-page.netlify.app/assets/img/mobile-5.png" data-value="2" className="item" onDragStart={handleDragStart} />,
    <img src="https://fox-landing-page.netlify.app/assets/img/mobile-5.png" data-value="3" className="item" onDragStart={handleDragStart} />,
    <img src="https://fox-landing-page.netlify.app/assets/img/mobile-5.png" data-value="4" className="item" onDragStart={handleDragStart} />,
    <img src="https://fox-landing-page.netlify.app/assets/img/mobile-5.png" data-value="5" className="item" onDragStart={handleDragStart} />,
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
                            <h1>SUCCEED</h1>
                            <p className="sub_text">Proactively syndicate open-source e-markets after low-risk high-yield synergy. Professionally simplify visionary technology.</p>
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
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src="https://img-premium.flaticon.com/png/512/3230/premium/3230652.png?token=exp=1631696189~hmac=2e742e51f317b6b0f18d52260e00a0e1" alt="" className="img-icon" />
                                    <h6 className="card__h">Creative Design</h6>
                                    <p className="card__p">Proactively syndicate open-source e-markets after low-risk high-yield synergy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src="https://img-premium.flaticon.com/png/512/3230/premium/3230652.png?token=exp=1631696189~hmac=2e742e51f317b6b0f18d52260e00a0e1" alt="" className="img-icon" />
                                    <h6 className="card__h">Creative Design</h6>
                                    <p className="card__p">Proactively syndicate open-source e-markets after low-risk high-yield synergy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img src="https://img-premium.flaticon.com/png/512/3230/premium/3230652.png?token=exp=1631696189~hmac=2e742e51f317b6b0f18d52260e00a0e1" alt="" className="img-icon" />
                                    <h6 className="card__h">Creative Design</h6>
                                    <p className="card__p">Proactively syndicate open-source e-markets after low-risk high-yield synergy.</p>
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
                            <img src={s} className="mx-auto d-block img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h5 className="work__h">Make Business Easy With Us</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum aliquid, eveniet ex tempore saepe.</p>
                            <div className="row my-4">
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.</p>
                                </div>
                                <div className="col-lg-6">
                                    <img src="https://img-premium.flaticon.com/png/512/3631/premium/3631163.png?token=exp=1631696743~hmac=dae302c99850321cfdeb18f9fc430226" className="work__icon" alt="" />
                                    <p>Intrinsically aggregate cutting-edge internal or "organic" sources through pandemic.</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video">
                <div className="container text-center">
                    <h2 className="vide__h">Watch <span className="primary__color">Video</span></h2>
                    <p className="center__p">Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.</p>
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
                    <p className="center__p">Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.</p>
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
                    <p className="center__p">Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.</p>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3127/3127450.png" className="facts__icon" alt="" />
                                    <h6 className="facts_head"> 225</h6>
                                    <p className="facts_p">Coffee Cups</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3127/3127450.png" className="facts__icon" alt="" />
                                    <h6 className="facts_head"> 225</h6>
                                    <p className="facts_p">Coffee Cups</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3127/3127450.png" className="facts__icon" alt="" />
                                    <h6 className="facts_head"> 225</h6>
                                    <p className="facts_p">Coffee Cups</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3127/3127450.png" className="facts__icon" alt="" />
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum aliquid, eveniet ex tempore saepe.</p>
                            <div className="row">
                                <div className="col-lg-4">
                                    <p><button  className="trail_btn">APP STORE</button> </p>
                                </div>
                                <div className="col-lg-5">
                                    <p><button className="trail_btn">GOOGLE PLAY</button></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <img src="https://fox-landing-page.netlify.app/assets/img/mobile-5.png" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="touch">
                <div className="container">
                    <div className="text-center">
                        <h2 className="vide__h">Get <span className="primary__color">in</span> touch</h2>
                        <p className="center__p">Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incidit labore lorem ipsum amet madolor sit amet.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <form >
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control"  placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
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
