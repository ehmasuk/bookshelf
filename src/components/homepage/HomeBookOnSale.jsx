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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmrkeffNz2vFO8s5PTN1213FH2ObwsOSWfS-40LPXRC7GG-4-K4jLi-TO4qQ7rOGIItw&usqp=CAU",
        price: "83",
        oldPrice: 162,
        rating: 4,
        tag: "sharp",
    },
    {
        title: "cannot",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeICSmHOfxzt_H_X2xtX8hMjkOxBlRDcecdUcKxmxRdehYdv7rqjk3BMdcMYPxaxLHdo&usqp=CAU",
        price: "172",
        oldPrice: 200,
        rating: 4,
        tag: "very",
    },
    {
        title: "while",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmi37DN0OHStICdWQcOmpa68VQ9UMDIiDODGRa-6J00olnDwwUH056Ap2r24vJDMsnNmk&usqp=CAU",
        price: "114",
        oldPrice: 144,
        rating: 4,
        tag: "diagram",
    },
    {
        title: "now",
        img: "https://www.creativeparamita.com/wp-content/uploads/2023/05/Flesh-Eaters-Among-Us.jpg",
        price: "124",
        oldPrice: 150,
        rating: 4,
        tag: "plate",
    },
    {
        title: "way",
        img: "https://www.creativeparamita.com/wp-content/uploads/2023/10/Night-of-the-Living-Dread-442x705.jpg",
        price: "57",
        oldPrice: 167,
        rating: 5,
        tag: "later",
    },
    {
        title: "customs",
        img: "https://i.pinimg.com/474x/c9/af/8d/c9af8d043890f449e31f8d7105ddc18a.jpg",
        price: "188",
        oldPrice: 129,
        rating: 4,
        tag: "program",
    },
    {
        title: "huge",
        img: "https://thebookcoverdesigner.com/wp-content/uploads/2024/02/t-extinction-of-heavens-324x519.jpg",
        price: "156",
        oldPrice: 133,
        rating: 5,
        tag: "bridge",
    },
    {
        title: "orange",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrWuc4OoNt0cduwCuvt0rfs8Kxja3P9tY-GYLot22vl0rn69SmuwmwmfAmWY7GbVzu2IA&usqp=CAU",
        price: "143",
        oldPrice: 106,
        rating: 5,
        tag: "peace",
    },
    {
        title: "leave",
        img: "https://i.pinimg.com/736x/17/f2/99/17f299155513b393dc9ee7c865da97e1.jpg",
        price: "188",
        oldPrice: 101,
        rating: 4,
        tag: "locate",
    },
    {
        title: "owner",
        img: "https://m.media-amazon.com/images/I/51BA6CTNqeL.jpg",
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
