import HomeBookOnSale from "../../components/homepage/HomeBookOnSale";
import HomeFeatureProduct from "../../components/homepage/HomeFeatureProduct";
import HomeHeroSlider from "../../components/homepage/HomeHeroSlider";
import HomeLatestNewsSlider from "../../components/homepage/HomeLatestNewsSlider";
import HomeRecomSlider from "../../components/homepage/HomeRecomCard";
import HomeSpecialOfferSlider from "../../components/homepage/HomeSpecialOfferSlider";
import HomeTestimonialSlider from "../../components/homepage/HomeTestimonialSlider";

function Homepage() {
    return (
        <div>
            <div className="page-content bg-white">
                {/*Swiper Banner Start */}
                <HomeHeroSlider />
                {/*Swiper Banner End*/}
                {/* Client Start*/}
                {/* <div className="bg-white py-5" style={{ height: "fit-content" }}>
                    <div className="container">
                        <div className="swiper client-swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <img src="https://picsum.photos/500/300?random=63" alt="book" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://picsum.photos/500/300?random=79" alt="book" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://picsum.photos/500/300?random=85" alt="book" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://picsum.photos/500/300?random=97" alt="book" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://picsum.photos/500/300?random=88" alt="book" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Client End*/}
                {/*Recommend Section Start*/}
                <section className="content-inner-1 bg-grey reccomend" style={{ height: "fit-content" }}>
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">Recomended For You</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris
                            </p>
                        </div>
                        {/* Swiper */}
                        <HomeRecomSlider />
                    </div>
                </section>
                {/* icon-box1 */}
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon-bx-wraper style-1 m-b30 text-center">
                                    <div className="icon-bx-sm m-b10">
                                        <i className="flaticon-power icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title m-b10">Quick Delivery</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-bx-wraper style-1 m-b30 text-center">
                                    <div className="icon-bx-sm m-b10">
                                        <i className="flaticon-shield icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title m-b10">Secure Payment</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon-bx-wraper style-1 m-b30 text-center">
                                    <div className="icon-bx-sm m-b10">
                                        <i className="flaticon-like icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title m-b10">Best Quality</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-bx-wraper style-1 m-b30 text-center">
                                    <div className="icon-bx-sm m-b10">
                                        <i className="flaticon-star icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title m-b10">Return Guarantee</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* icon-box1 End*/}
                {/* Book Sale */}
                <section className="content-inner-1" style={{ height: "fit-content" }}>
                    <div className="container">
                        <div className="section-head book-align">
                            <h2 className="title mb-0">Books on Sale</h2>
                            <div className="pagination-align style-1">
                                <div className="swiper-button-prev">
                                    <i className="fa-solid fa-angle-left" />
                                </div>
                                <div className="swiper-pagination-two" />
                                <div className="swiper-button-next">
                                    <i className="fa-solid fa-angle-right" />
                                </div>
                            </div>
                        </div>
                        <HomeBookOnSale />
                    </div>
                </section>
                {/* Book Sale End */}
                {/* Feature Product */}
                <section className="content-inner-1 bg-grey reccomend" style={{height:'fit-content'}}>
                    <div className="container">
                        <div className="section-head text-center">
                            <div className="circle style-1" />
                            <h2 className="title">Featured Product</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris{" "}
                            </p>
                        </div>
                    </div>
                    <div className="container">
                        <HomeFeatureProduct />
                    </div>
                </section>
                {/* Feature Product End */}
                {/* Special Offer*/}
                <section className="content-inner-2" style={{height:'fit-content'}}>
                    <HomeSpecialOfferSlider />
                </section>
                {/* Special Offer End */}
                {/* Testimonial */}
                <section className="content-inner-2 testimonial-wrapper" style={{height:'fit-content'}}>
                    <div className="container">
                        <div className="testimonial">
                            <div className="section-head book-align">
                                <div>
                                    <h2 className="title mb-0">Testimonials</h2>
                                    <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                                <div className="pagination-align style-1">
                                    <div className="testimonial-button-prev swiper-button-prev">
                                        <i className="fa-solid fa-angle-left" />
                                    </div>
                                    <div className="testimonial-button-next swiper-button-next">
                                        <i className="fa-solid fa-angle-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <HomeTestimonialSlider />
                    </div>
                </section>
                {/* Testimonial End */}
                {/* Latest News */}
                <section className="content-inner-2" style={{height:'fit-content'}}>
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">Latest News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                        <HomeLatestNewsSlider />
                    </div>
                </section>
                {/* Latest News End */}
                {/* Feature Box */}
                <section className="content-inner" >
                    <div className="container">
                        <div className="row sp15">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="icon-bx-wraper style-2 m-b30 text-center">
                                    <div className="icon-bx-lg">
                                        <i className="fa-solid fa-users icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dz-title counter m-b0">125,663</h2>
                                        <p className="font-20">Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-bx-wraper style-2 m-b30 text-center">
                                    <div className="icon-bx-lg">
                                        <i className="fa-solid fa-book icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dz-title counter m-b0">50,672</h2>
                                        <p className="font-20">Book Collections</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="icon-bx-wraper style-2 m-b30 text-center">
                                    <div className="icon-bx-lg">
                                        <i className="fa-solid fa-store icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dz-title counter m-b0">1,562</h2>
                                        <p className="font-20">Our Stores</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-bx-wraper style-2 m-b30 text-center">
                                    <div className="icon-bx-lg">
                                        <i className="fa-solid fa-leaf icon-cell" />
                                    </div>
                                    <div className="icon-content">
                                        <h2 className="dz-title counter m-b0">457</h2>
                                        <p className="font-20">Famous Writers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Feature Box End */}
                {/* Newsletter */}
                <section
                    className="py-5 newsletter-wrapper"
                    style={{
                        backgroundImage: 'url("background/bg1.jpg")',
                        backgroundSize: "cover",
                    }}
                >
                    <div className="container">
                        <div className="subscride-inner">
                            <div className="row style-1 justify-content-xl-between justify-content-lg-center align-items-center text-xl-start text-center">
                                <div className="col-xl-7 col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="section-head mb-0">
                                        <h2 className="title text-white my-lg-3 mt-0">Subscribe our newsletter for newest books updates</h2>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                                    <form className="dzSubscribe style-1" action="script/mailchamp.php" method="post">
                                        <div className="dzSubscribeMsg" />
                                        <div className="form-group">
                                            <div className="input-group mb-0">
                                                <input name="dzEmail" required="required" type="email" className="form-control bg-transparent text-white" placeholder="Your Email Address" />
                                                <div className="input-group-addon">
                                                    <button name="submit" value="Submit" type="submit" className="btn btn-primary btnhover">
                                                        <span>SUBSCRIBE</span>
                                                        <i className="fa-solid fa-paper-plane" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Newsletter End */}
            </div>
        </div>
    );
}

export default Homepage;
