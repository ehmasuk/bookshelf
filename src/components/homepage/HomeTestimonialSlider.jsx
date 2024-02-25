import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeTestimonialSlider() {
    return (
        <div className="testimonial-swiper">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    480: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="testimonial-1 overflow-hidden">
                        <div className="testimonial-info">
                            <ul className="dz-rating">
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                            </ul>
                            <div className="testimonial-text">
                                <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                            </div>
                            <div className="testimonial-detail">
                                <div className="testimonial-pic">
                                    <img src="https://picsum.photos/500/300?random=91" alt="book" />
                                </div>
                                <div className="info-right">
                                    <h6 className="testimonial-name">Jason Huang</h6>
                                    <span className="testimonial-position">Book Lovers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-1 overflow-hidden">
                        <div className="testimonial-info">
                            <ul className="dz-rating">
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                            </ul>
                            <div className="testimonial-text">
                                <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                            </div>
                            <div className="testimonial-detail">
                                <div className="testimonial-pic">
                                    <img src="https://picsum.photos/500/300?random=91" alt="book" />
                                </div>
                                <div className="info-right">
                                    <h6 className="testimonial-name">Jason Huang</h6>
                                    <span className="testimonial-position">Book Lovers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-1 overflow-hidden">
                        <div className="testimonial-info">
                            <ul className="dz-rating">
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                            </ul>
                            <div className="testimonial-text">
                                <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                            </div>
                            <div className="testimonial-detail">
                                <div className="testimonial-pic">
                                    <img src="https://picsum.photos/500/300?random=91" alt="book" />
                                </div>
                                <div className="info-right">
                                    <h6 className="testimonial-name">Jason Huang</h6>
                                    <span className="testimonial-position">Book Lovers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial-1 overflow-hidden">
                        <div className="testimonial-info">
                            <ul className="dz-rating">
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                                <li>
                                    <i className="flaticon-star text-yellow" />
                                </li>
                            </ul>
                            <div className="testimonial-text">
                                <p>Very impresive store. Your book made studying for the ABC certification exams a breeze. Thank you very much</p>
                            </div>
                            <div className="testimonial-detail">
                                <div className="testimonial-pic">
                                    <img src="https://picsum.photos/500/300?random=91" alt="book" />
                                </div>
                                <div className="info-right">
                                    <h6 className="testimonial-name">Jason Huang</h6>
                                    <span className="testimonial-position">Book Lovers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HomeTestimonialSlider;
