// import Swiper core and required modules
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const homeRecomSlideInfo = [
    {
        title: "milk",
        img: "https://picsum.photos/500/700?random=55",
        price: "83",
    },
    {
        title: "cannot",
        img: "https://picsum.photos/500/700?random=94",
        price: "172",
    },
    {
        title: "while",
        img: "https://picsum.photos/500/700?random=57",
        price: "114",
    },
    {
        title: "now",
        img: "https://picsum.photos/500/700?random=100",
        price: "124",
    },
    {
        title: "way",
        img: "https://picsum.photos/500/700?random=70",
        price: "57",
    },
    {
        title: "customs",
        img: "https://picsum.photos/500/700?random=33",
        price: "188",
    },
    {
        title: "huge",
        img: "https://picsum.photos/500/700?random=33",
        price: "156",
    },
    {
        title: "orange",
        img: "https://picsum.photos/500/700?random=72",
        price: "143",
    },
    {
        title: "leave",
        img: "https://picsum.photos/500/700?random=71",
        price: "188",
    },
    {
        title: "owner",
        img: "https://picsum.photos/500/700?random=59",
        price: "124",
    },
];

function HomeRecomSlider() {
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
            {homeRecomSlideInfo.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="books-card style-1 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="dz-media">
                                <img src={item.img} alt="book" />
                            </div>
                            <div className="dz-content">
                                <h4 className="title">{item.title}</h4>
                                <span className="price">${item.price}</span>
                                <a href="shop-cart.html" className="btn btn-secondary btnhover2">
                                    <i className="flaticon-shopping-cart-1 m-r10" /> Add to cart
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default HomeRecomSlider;
