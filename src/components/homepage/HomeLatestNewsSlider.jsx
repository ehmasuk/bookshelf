import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeLatestNewsSlider() {
    return (
        <div className="blog-swiper">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    480: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="dz-blog style-1 bg-white m-b30 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="dz-media">
                                <a href="blog-detail.html">
                                    <img src="https://picsum.photos/500/300?random=95" alt="book" />
                                </a>
                            </div>
                            <div className="dz-info p-3">
                                <h6 className="dz-title">
                                    <a href="blog-detail.html">Benefits of reading: Smart, Diligent, Happy, Intelligent</a>
                                </h6>
                                <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                                <div className="dz-meta meta-bottom mt-3 pt-3">
                                    <ul className="">
                                        <li className="post-date">
                                            <i className="far fa-calendar fa-fw m-r10" />
                                            24 March, 2022
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="dz-blog style-1 bg-white m-b30 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="dz-media">
                                <a href="blog-detail.html">
                                    <img src="https://picsum.photos/500/300?random=95" alt="book" />
                                </a>
                            </div>
                            <div className="dz-info p-3">
                                <h6 className="dz-title">
                                    <a href="blog-detail.html">Benefits of reading: Smart, Diligent, Happy, Intelligent</a>
                                </h6>
                                <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                                <div className="dz-meta meta-bottom mt-3 pt-3">
                                    <ul className="">
                                        <li className="post-date">
                                            <i className="far fa-calendar fa-fw m-r10" />
                                            24 March, 2022
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="dz-blog style-1 bg-white m-b30 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="dz-media">
                                <a href="blog-detail.html">
                                    <img src="https://picsum.photos/500/300?random=95" alt="book" />
                                </a>
                            </div>
                            <div className="dz-info p-3">
                                <h6 className="dz-title">
                                    <a href="blog-detail.html">Benefits of reading: Smart, Diligent, Happy, Intelligent</a>
                                </h6>
                                <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                                <div className="dz-meta meta-bottom mt-3 pt-3">
                                    <ul className="">
                                        <li className="post-date">
                                            <i className="far fa-calendar fa-fw m-r10" />
                                            24 March, 2022
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="dz-blog style-1 bg-white m-b30 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="dz-media">
                                <a href="blog-detail.html">
                                    <img src="https://picsum.photos/500/300?random=95" alt="book" />
                                </a>
                            </div>
                            <div className="dz-info p-3">
                                <h6 className="dz-title">
                                    <a href="blog-detail.html">Benefits of reading: Smart, Diligent, Happy, Intelligent</a>
                                </h6>
                                <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                                <div className="dz-meta meta-bottom mt-3 pt-3">
                                    <ul className="">
                                        <li className="post-date">
                                            <i className="far fa-calendar fa-fw m-r10" />
                                            24 March, 2022
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="dz-blog style-1 bg-white m-b30 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="dz-media">
                                <a href="blog-detail.html">
                                    <img src="https://picsum.photos/500/300?random=95" alt="book" />
                                </a>
                            </div>
                            <div className="dz-info p-3">
                                <h6 className="dz-title">
                                    <a href="blog-detail.html">Benefits of reading: Smart, Diligent, Happy, Intelligent</a>
                                </h6>
                                <p className="m-b0">Lorem ipsum dolor sit amet, consectetur adipiscing do eiusmod tempor</p>
                                <div className="dz-meta meta-bottom mt-3 pt-3">
                                    <ul className="">
                                        <li className="post-date">
                                            <i className="far fa-calendar fa-fw m-r10" />
                                            24 March, 2022
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HomeLatestNewsSlider;
