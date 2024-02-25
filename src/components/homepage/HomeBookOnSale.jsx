// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const homeBookOnSaleSlide = [
    {
        title: "milk",
        img: "https://picsum.photos/500/300?random=55",
        price: "83",
        oldPrice: 162,
        rating: 4,
        tag: "sharp",
    },
    {
        title: "cannot",
        img: "https://picsum.photos/500/300?random=94",
        price: "172",
        oldPrice: 200,
        rating: 4,
        tag: "very",
    },
    {
        title: "while",
        img: "https://picsum.photos/500/300?random=57",
        price: "114",
        oldPrice: 144,
        rating: 4,
        tag: "diagram",
    },
    {
        title: "now",
        img: "https://picsum.photos/500/300?random=100",
        price: "124",
        oldPrice: 150,
        rating: 4,
        tag: "plate",
    },
    {
        title: "way",
        img: "https://picsum.photos/500/300?random=70",
        price: "57",
        oldPrice: 167,
        rating: 5,
        tag: "later",
    },
    {
        title: "customs",
        img: "https://picsum.photos/500/300?random=33",
        price: "188",
        oldPrice: 129,
        rating: 4,
        tag: "program",
    },
    {
        title: "huge",
        img: "https://picsum.photos/500/300?random=33",
        price: "156",
        oldPrice: 133,
        rating: 5,
        tag: "bridge",
    },
    {
        title: "orange",
        img: "https://picsum.photos/500/300?random=72",
        price: "143",
        oldPrice: 106,
        rating: 5,
        tag: "peace",
    },
    {
        title: "leave",
        img: "https://picsum.photos/500/300?random=71",
        price: "188",
        oldPrice: 101,
        rating: 4,
        tag: "locate",
    },
    {
        title: "owner",
        img: "https://picsum.photos/500/300?random=59",
        price: "124",
        oldPrice: 112,
        rating: 5,
        tag: "age",
    },
];

function HomeBookOnSale() {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={5}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
            loop={true}
        >
            {homeBookOnSaleSlide.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div key={index} className="swiper-slide">
                            <div className="books-card style-3 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="dz-media">
                                    <img src={item.img} alt="book" />
                                </div>
                                <div className="dz-content">
                                    <h5 className="title">
                                        <a href="books-grid-view.html">{item.title}</a>
                                    </h5>
                                    <ul className="dz-tags">
                                        <li>
                                            <a href="books-grid-view.html">{item.rating}</a>
                                        </li>
                                    </ul>
                                    <div className="book-footer">
                                        <div className="rate">
                                            <i className="flaticon-star" /> {item.rating}
                                        </div>
                                        <div className="price">
                                            <span className="price-num">{item.price}</span>
                                            <del>${item.oldPrice}</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default HomeBookOnSale;
