// import Swiper core and required modules
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeHeroSlider() {
    return (
        <div className="main-slider style-1">
            <div className="">
                <Swiper
                    modules={[EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={1500}
                    loop={true}
                    effect="fade"
                >
                    <SwiperSlide>
                        <div className="bg-blue" style={{ backgroundImage: "url('https://bookland.wprdx.com/demo/wp-content/themes/bookland//assets/images/background/waveelement.png')" }}>
                            <div className="container">
                                <div className="banner-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="swiper-content">
                                                <div className="content-info">
                                                    <h6 className="sub-title" data-swiper-parallax={-10}>
                                                        BEST MANAGEMENT{" "}
                                                    </h6>
                                                    <h1 className="title mb-0" data-swiper-parallax={-20}>
                                                        Think and Grow Rich
                                                    </h1>
                                                    <ul className="dz-tags" data-swiper-parallax={-30}>
                                                        <li>
                                                            <a href="#">Napoleon Hill</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Business Strategy</a>
                                                        </li>
                                                    </ul>
                                                    <p className="text mb-0" data-swiper-parallax={-40}>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
                                                        Lorem Ipsum is that it has a more-or-less normal.
                                                    </p>
                                                    <div className="price" data-swiper-parallax={-50}>
                                                        <span className="price-num">$17.2</span>
                                                        <del>$15.25</del>
                                                        <span className="badge badge-danger">15% OFF</span>
                                                    </div>
                                                    <div className="content-btn" data-swiper-parallax={-60}>
                                                        <a className="btn btn-primary btnhover" href="books-grid-view.html">
                                                            Buy Now
                                                        </a>
                                                        <a className="btn border btnhover ms-4 text-white" href="books-detail.html">
                                                            See Details
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* <div className="partner">
                                                    <p>Our partner</p>
                                                    <div className="brand-logo">
                                                        <img src="https://picsum.photos/100/55?random=53" alt="book" />
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="banner-media" data-swiper-parallax={-100}>
                                                <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/banner-media2.png" alt="book" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-blue" style={{ backgroundImage: "url('https://bookland.wprdx.com/demo/wp-content/themes/bookland//assets/images/background/waveelement.png')" }}>
                            <div className="container">
                                <div className="banner-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="swiper-content">
                                                <div className="content-info">
                                                    <h6 className="sub-title" data-swiper-parallax={-10}>
                                                        BEST SELLER
                                                    </h6>
                                                    <h1 className="title mb-0" data-swiper-parallax={-20}>
                                                        Pushing Clouds
                                                    </h1>
                                                    <ul className="dz-tags" data-swiper-parallax={-30}>
                                                        <li>
                                                            <a href="#">Napoleon Hill</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Business Strategy</a>
                                                        </li>
                                                    </ul>
                                                    <p className="text mb-0" data-swiper-parallax={-40}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris
                                                    </p>
                                                    <div className="price" data-swiper-parallax={-50}>
                                                        <span className="price-num">$9.5</span>
                                                        <del>$12.0</del>
                                                        <span className="badge badge-danger">20% OFF</span>
                                                    </div>
                                                    <div className="content-btn" data-swiper-parallax={-50}>
                                                        <a className="btn btn-primary btnhover" href="books-grid-view.html">
                                                            Buy Now
                                                        </a>
                                                        <a className="btn border btnhover ms-4 text-white" href="books-detail.html">
                                                            See Details
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* <div className="partner">
                                                    <p>Our partner</p>
                                                    <div className="brand-logo">
                                                        <img src="https://picsum.photos/100/55?random=99" alt="book" />
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="banner-media" data-swiper-parallax={-100}>
                                                <img src="https://bookland.wprdx.com/demo/wp-content/uploads/2022/09/banner-media.png" alt="book" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="container swiper-pagination-wrapper">
                    <div className="swiper-pagination-five" />
                </div>
            </div>
            <div className="main-swiper-thumb">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        480: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 2, spaceBetween: 20 },
                    }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="books-card">
                            <div className="dz-media">
                                <img src="https://picsum.photos/500/300?random=81" alt="book" />
                            </div>
                            <div className="dz-content">
                                <h5 className="title mb-0">Pushing Clouds</h5>
                                <div className="dz-meta">
                                    <ul>
                                        <li>by Jamet Sigh</li>
                                    </ul>
                                </div>
                                <div className="book-footer">
                                    <div className="price">
                                        <span className="price-num">$5.7</span>
                                    </div>
                                    <Rating initialRating={4} readonly emptySymbol={<FaRegStar color="#FFA808" />} fullSymbol={<FaStar color="#FFA808" />} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="books-card">
                            <div className="dz-media">
                                <img src="https://picsum.photos/500/300?random=81" alt="book" />
                            </div>
                            <div className="dz-content">
                                <h5 className="title mb-0">Pushing Clouds</h5>
                                <div className="dz-meta">
                                    <ul>
                                        <li>by Jamet Sigh</li>
                                    </ul>
                                </div>
                                <div className="book-footer">
                                    <div className="price">
                                        <span className="price-num">$5.7</span>
                                    </div>
                                    <Rating initialRating={4} readonly emptySymbol={<FaRegStar color="#FFA808" />} fullSymbol={<FaStar color="#FFA808" />} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="books-card">
                            <div className="dz-media">
                                <img src="https://picsum.photos/500/300?random=81" alt="book" />
                            </div>
                            <div className="dz-content">
                                <h5 className="title mb-0">Pushing Clouds</h5>
                                <div className="dz-meta">
                                    <ul>
                                        <li>by Jamet Sigh</li>
                                    </ul>
                                </div>
                                <div className="book-footer">
                                    <div className="price">
                                        <span className="price-num">$5.7</span>
                                    </div>
                                    <Rating initialRating={4} readonly emptySymbol={<FaRegStar color="#FFA808" />} fullSymbol={<FaStar color="#FFA808" />} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default HomeHeroSlider;
