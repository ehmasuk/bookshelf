import { FaBars } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import { useGetallBooksQuery } from "../../api/BooksApi";
import useGet from "../../hooks/useGet";
import ShopSingleBook from "./../../components/shoppage/ShopSingleBook";

function ShopPage() {
    const [books, isLoading, error] = useGet("https://ehmasuk.github.io/course/coursesData.js");

    const { data } = useGetallBooksQuery("coursesData.js");

    return (
        <div className="page-content bg-grey">
            <div className="content-inner border-bottom">
                <div className="container">
                    <div className="row ">
                        <div className="col-xl-3">
                            <div className="shop-filter">
                                <div className="d-flex justify-content-between">
                                    <h4 className="title">Filter Option</h4>
                                    <a href="#" className="panel-close-btn">
                                        <i className="flaticon-close" />
                                    </a>
                                </div>
                                <div className="accordion accordion-filter" id="accordionExample">
                                    <div className="accordion-item">
                                        <button
                                            className="accordion-button"
                                            id="headingFive"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            Price Range
                                        </button>
                                        <div id="collapseFive" className="accordion-collapse collapse accordion-body show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="range-slider style-1">
                                                <div id="slider-tooltips" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <button
                                            className="accordion-button"
                                            id="headingOne"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Shop by Category
                                        </button>
                                        <div id="collapseOne" className="accordion-collapse collapse show accordion-body" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="widget dz-widget_services">
                                                <div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-01" />
                                                        <label className="form-check-label" htmlFor="productCheckBox-01">
                                                            Action
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-02" />
                                                        <label className="form-check-label" htmlFor="productCheckBox-02">
                                                            Advanture
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-03" />
                                                        <label className="form-check-label" htmlFor="productCheckBox-03">
                                                            Animation
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-04" />
                                                        <label className="form-check-label" htmlFor="productCheckBox-04">
                                                            Biography
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-05" />
                                                        <label className="form-check-label" htmlFor="productCheckBox-05">
                                                            Comedy
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-06" />
                                                        <label className="form-check-label" htmlFor="productCheckBox-06">
                                                            Crime
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-07" />
                                                        <label className="form-check-label" htmlFor="productCheckBox-07">
                                                            Documentary
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-016" />
                                                        <label className="form-check-label" htmlFor="productCheckBox-014">
                                                            Design
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <button
                                            className="accordion-button collapsed"
                                            id="headingTwo"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Choose Publisher
                                        </button>
                                        <div id="collapseTwo" className="accordion-collapse collapse accordion-body" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="widget dz-widget_services">
                                                <div className="form-check search-content">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-015" />
                                                    <label className="form-check-label" htmlFor="productCheckBox-015">
                                                        Action
                                                    </label>
                                                </div>
                                                <div className="form-check search-content">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-016" />
                                                    <label className="form-check-label" htmlFor="productCheckBox-016">
                                                        Advanture
                                                    </label>
                                                </div>
                                                <div className="form-check search-content">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-017" />
                                                    <label className="form-check-label" htmlFor="productCheckBox-017">
                                                        Animation
                                                    </label>
                                                </div>
                                                <div className="form-check search-content">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-018" />
                                                    <label className="form-check-label" htmlFor="productCheckBox-018">
                                                        Biography
                                                    </label>
                                                </div>
                                                <div className="form-check search-content">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-019" />
                                                    <label className="form-check-label" htmlFor="productCheckBox-019">
                                                        Comedy
                                                    </label>
                                                </div>
                                                <div className="form-check search-content">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-020" />
                                                    <label className="form-check-label" htmlFor="productCheckBox-020">
                                                        Crime
                                                    </label>
                                                </div>
                                                <div className="form-check search-content">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox-021" />
                                                    <label className="form-check-label" htmlFor="productCheckBox-021">
                                                        Documentary
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <button
                                            className="accordion-button collapsed"
                                            id="headingThree"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Select Year
                                        </button>
                                        <div id="collapseThree" className="accordion-collapse collapse accordion-body" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="widget dz-widget_services col d-flex justify-content-between">
                                                <div className="">
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox22" />
                                                        <label className="form-check-label" htmlFor="productCheckBox22">
                                                            2022
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox23" />
                                                        <label className="form-check-label" htmlFor="productCheckBox23">
                                                            2021
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox24" />
                                                        <label className="form-check-label" htmlFor="productCheckBox24">
                                                            2020
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox25" />
                                                        <label className="form-check-label" htmlFor="productCheckBox25">
                                                            2019
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox26" />
                                                        <label className="form-check-label" htmlFor="productCheckBox26">
                                                            2018
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox27" />
                                                        <label className="form-check-label" htmlFor="productCheckBox27">
                                                            2017
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox28" />
                                                        <label className="form-check-label" htmlFor="productCheckBox28">
                                                            2016
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox29" />
                                                        <label className="form-check-label" htmlFor="productCheckBox29">
                                                            2015
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox30" />
                                                        <label className="form-check-label" htmlFor="productCheckBox30">
                                                            2014
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox31" />
                                                        <label className="form-check-label" htmlFor="productCheckBox31">
                                                            2013
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox32" />
                                                        <label className="form-check-label" htmlFor="productCheckBox32">
                                                            2012
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox33" />
                                                        <label className="form-check-label" htmlFor="productCheckBox33">
                                                            2011
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox34" />
                                                        <label className="form-check-label" htmlFor="productCheckBox34">
                                                            2010
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox35" />
                                                        <label className="form-check-label" htmlFor="productCheckBox35">
                                                            2009
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox36" />
                                                        <label className="form-check-label" htmlFor="productCheckBox36">
                                                            2008
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox37" />
                                                        <label className="form-check-label" htmlFor="productCheckBox37">
                                                            2007
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox38" />
                                                        <label className="form-check-label" htmlFor="productCheckBox38">
                                                            2006
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox39" />
                                                        <label className="form-check-label" htmlFor="productCheckBox39">
                                                            2005
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox40" />
                                                        <label className="form-check-label" htmlFor="productCheckBox40">
                                                            2004
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox41" />
                                                        <label className="form-check-label" htmlFor="productCheckBox41">
                                                            2003
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox42" />
                                                        <label className="form-check-label" htmlFor="productCheckBox42">
                                                            2002
                                                        </label>
                                                    </div>
                                                    <div className="form-check search-content">
                                                        <input className="form-check-input" type="checkbox" defaultValue="" id="productCheckBox43" />
                                                        <label className="form-check-label" htmlFor="productCheckBox42">
                                                            2001
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion accordion-inner" id="filter-inner">
                                        <div className="accordion-item">
                                            <button
                                                className="accordion-button"
                                                id="headingOne_inner"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne_inner"
                                                aria-expanded="true"
                                                aria-controls="collapseOne_inner"
                                            >
                                                Best Sales (105)
                                            </button>
                                            <div id="collapseOne_inner" className="accordion-collapse collapse show accordion-body" aria-labelledby="headingOne_inner" data-bs-parent="#filter-inner">
                                                <ul>
                                                    <li>
                                                        <a href="#">Alone Here</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Alien Invassion</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Bullo The Cat</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Cut That Hair!</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Dragon Of The King</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row filter-buttons">
                                    <div>
                                        <a href="#" className="btn btn-secondary mt-4 btnhover d-block">
                                            Refine Search
                                        </a>
                                        <a href="#" className="btn btn-outline-secondary btnhover mt-3 d-block">
                                            Reset Filter
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="title">Books</h4>
                                <a href="#" className="btn btn-primary panel-btn">
                                    Filter
                                </a>
                            </div>
                            <div className="filter-area m-b30">
                                <div className="grid-area">
                                    <div className="shop-tab">
                                        <ul className="nav text-center product-filter justify-content-end" role="tablist">
                                            <li className="nav-item" role="button">
                                                <div className="nav-link">
                                                    <FaBars />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="category">
                                    <div className="form-group px-4">
                                        <i className="fas fa-sort-amount-down me-2 text-secondary" />
                                        <select className="default-select">
                                            <option>Filter</option>
                                            <option>Newest</option>
                                            <option>Top rated</option>
                                            <option>Top sold</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {isLoading && <Skeleton height={30} count={10} style={{ marginBottom: "20px" }} />}

                            <p className="text-danger">{error?.message}</p>

                            {books?.slice(0, 9).map((book, index) => {
                                return <ShopSingleBook key={index} book={book} />;
                            })}

                            {/* {booksData && console.log(booksData)} */}
                            <div className="row page">
                                <div className="col-md-6">
                                    <p className="page-text">Showing 12 from 50 data</p>
                                </div>
                                <div className="col-md-6">
                                    <nav aria-label="Blog Pagination">
                                        <ul className="pagination style-1 p-t20">
                                            <li className="page-item">
                                                <a className="page-link prev" href="#">
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link active" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link next" href="#">
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Client Start*/}
            <div className="bg-white py-5">
                <div className="container">
                    {/*Client Swiper */}
                    <div className="swiper client-swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="images/client/client1.svg" alt="client" />
                            </div>
                            <div className="swiper-slide">
                                <img src="images/client/client2.svg" alt="client" />
                            </div>
                            <div className="swiper-slide">
                                <img src="images/client/client3.svg" alt="client" />
                            </div>
                            <div className="swiper-slide">
                                <img src="images/client/client4.svg" alt="client" />
                            </div>
                            <div className="swiper-slide">
                                <img src="images/client/client5.svg" alt="client" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Client End*/}
            {/* Feature Box */}
            <section className="content-inner">
                <div className="container">
                    <div className="row sp15">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
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
                        <div className=" col-lg-3 col-md-6 col-sm-6 col-6">
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
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="icon-bx-wraper style-2 m-b30 text-center">
                                <div className="icon-bx-lg">
                                    <i className="fa-solid fa-store icon-cell" />
                                </div>
                                <div className="icon-content">
                                    <h2
                                        className="dz-
                                    title counter m-b0"
                                    >
                                        1,562
                                    </h2>
                                    <p className="font-20">Our Stores</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="icon-bx-wraper style-2 m-b30 text-center">
                                <div className="icon-bx-lg">
                                    <i className="fa-solid fa-leaf icon-cell" />
                                </div>
                                <div className="icon-content">
                                    <h2
                                        className="dz-
                                    title counter m-b0"
                                    >
                                        457
                                    </h2>
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
                    backgroundImage: 'url("images/background/bg1.jpg")',
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="subscride-inner">
                        <div className="row style-1 justify-content-xl-between justify-content-lg-center align-items-center text-xl-start text-center">
                            <div className="col-xl-7 col-lg-12">
                                <div className="section-head mb-0">
                                    <h2
                                        className="
                                    title text-white my-lg-3 mt-0"
                                    >
                                        Subscribe our newsletter for newest books updates
                                    </h2>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
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
    );
}

export default ShopPage;
