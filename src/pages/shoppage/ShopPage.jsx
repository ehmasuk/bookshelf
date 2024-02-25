import { useEffect, useState } from "react";
import ShopSingleBook from "../../components/shoppage/ShopSingleBook";

function ShopPage() {
    const booksDataDeafult = [
        {
            bookid: "7fdf5aff-a9a9-5b3f-b690-497cc2d9ccee",
            title: "Allen King",
            descrption:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            oldPrice: "78.99",
            newPrice: "86.99",
            img: "https://picsum.photos/500/700?random=7",
            publishDate: "2024-02-03",
        },
        {
            bookid: "8654b328-d295-54ab-9b54-fcf2f0c3c9d6",
            title: "Carrie Colon",
            descrption:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            oldPrice: "56.99",
            newPrice: "59.99",
            img: "https://picsum.photos/500/700?random=60",
            publishDate: "2024-02-01",
        },
        {
            bookid: "d9d1357b-c496-5c5e-a217-ec143f07ba10",
            title: "Steve Lindsey",
            descrption:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            oldPrice: "65.99",
            newPrice: "83.99",
            img: "https://picsum.photos/500/700?random=50",
            publishDate: "2024-02-02",
        },
        {
            bookid: "2f9e0f8a-2f62-5ecb-97fc-42efd3c5293b",
            title: "Steve 2022",
            descrption:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
            oldPrice: "65.99",
            newPrice: "83.99",
            img: "https://picsum.photos/500/700?random=50",
            publishDate: "2022-02-02",
        },
    ];

    const [booksData, setBooksData] = useState(booksDataDeafult);

    useEffect(() => {
        setBooksData((data) => {
            return data.slice(0).sort((a, b) => {
                return a.publishDate.localeCompare(b.publishDate);
            });
        });
    }, []);

    const [bookView, setBookView] = useState("list");

    const handleBookView = (view) => {
        setBookView(view);
    };

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
                                        <div className="accordion-item">
                                            <button
                                                className="accordion-button collapsed"
                                                id="headingTwo_inner"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo_inner"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo_inner"
                                            >
                                                Most Commented (21)
                                            </button>
                                            <div id="collapseTwo_inner" className="accordion-collapse collapse accordion-body" aria-labelledby="headingTwo_inner" data-bs-parent="#filter-inner">
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
                                        <div className="accordion-item">
                                            <button
                                                className="accordion-button collapsed"
                                                id="headingThree_inner"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree_inner"
                                                aria-expanded="false"
                                                aria-controls="collapseThree_inner"
                                            >
                                                Newest Books (32)
                                            </button>
                                            <div id="collapseThree_inner" className="accordion-collapse collapse accordion-body" aria-labelledby="headingThree_inner" data-bs-parent="#filter-inner">
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
                                        <div className="accordion-item">
                                            <button
                                                className="accordion-button collapsed"
                                                id="headingFour_inner"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour_inner"
                                                aria-expanded="false"
                                                aria-controls="collapseFour_inner"
                                            >
                                                Featured (129)
                                            </button>
                                            <div id="collapseFour_inner" className="accordion-collapse collapse accordion-body" aria-labelledby="headingFour_inner" data-bs-parent="#filter-inner">
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
                                        <div className="accordion-item">
                                            <button
                                                className="accordion-button collapsed"
                                                id="headingFive_inner"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive_inner"
                                                aria-expanded="false"
                                                aria-controls="collapseFive_inner"
                                            >
                                                Watch History (21)
                                            </button>
                                            <div id="collapseFive_inner" className="accordion-collapse collapse accordion-body" aria-labelledby="headingFive_inner" data-bs-parent="#filter-inner">
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
                                        <div className="accordion-item">
                                            <button
                                                className="accordion-button collapsed"
                                                id="headingSix_inner"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix_inner"
                                                aria-expanded="false"
                                                aria-controls="collapseSix_inner"
                                            >
                                                Best Books (44)
                                            </button>
                                            <div id="collapseSix_inner" className="accordion-collapse collapse accordion-body" aria-labelledby="headingSix_inner" data-bs-parent="#filter-inner">
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
                                            <li className="nav-item" role="button" onClick={() => handleBookView("list")}>
                                                <div className={`nav-link ${bookView === "list" && "active"}`}>
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3 5H21C21.2652 5 21.5196 4.89464 21.7071 4.7071C21.8946 4.51957 22 4.26521 22 4C22 3.73478 21.8946 3.48043 21.7071 3.29289C21.5196 3.10536 21.2652 3 21 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4C2 4.26521 2.10536 4.51957 2.29289 4.7071C2.48043 4.89464 2.73478 5 3 5Z"
                                                            fill="#AAAAAA"
                                                        />
                                                        <path
                                                            d="M3 13H21C21.2652 13 21.5196 12.8947 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8947 2.73478 13 3 13Z"
                                                            fill="#AAAAAA"
                                                        />
                                                        <path
                                                            d="M3 21H21C21.2652 21 21.5196 20.8947 21.7071 20.7071C21.8946 20.5196 22 20.2652 22 20C22 19.7348 21.8946 19.4804 21.7071 19.2929C21.5196 19.1054 21.2652 19 21 19H3C2.73478 19 2.48043 19.1054 2.29289 19.2929C2.10536 19.4804 2 19.7348 2 20C2 20.2652 2.10536 20.5196 2.29289 20.7071C2.48043 20.8947 2.73478 21 3 21Z"
                                                            fill="#AAAAAA"
                                                        />
                                                    </svg>
                                                </div>
                                            </li>
                                            <li className="nav-item" role="button" onClick={() => handleBookView("grid")}>
                                                <div className={`nav-link ${bookView === "grid" && "active"}`}>
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11ZM4 4H9V9H4V4Z"
                                                            fill="#AAAAAA"
                                                        />
                                                        <path
                                                            d="M14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11ZM15 4H20V9H15V4Z"
                                                            fill="#AAAAAA"
                                                        />
                                                        <path
                                                            d="M3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22ZM4 15H9V20H4V15Z"
                                                            fill="#AAAAAA"
                                                        />
                                                        <path
                                                            d="M14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22ZM15 15H20V20H15V15Z"
                                                            fill="#AAAAAA"
                                                        />
                                                    </svg>
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

                            {bookView === "list" &&
                                booksData.map((book, index) => {
                                    return <ShopSingleBook key={index} bookview={bookView} book={book} />;
                                })}
                            {bookView === "grid" && (
                                <div className="row book-grid-row">
                                    {booksData.map((book, index) => {
                                        return <ShopSingleBook key={index} bookview={bookView} book={book} />;
                                    })}
                                </div>
                            )}
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
                                    bookid : '0565444a-3daf-5948-aa20-1243265ece00',
                                    <h2
                                        className="dz-
                                    title counter m-b0"
                                    >
                                        125,663
                                    </h2>
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
                                    bookid : '582c6ed9-5097-5b6c-9c2f-b444113327f1',
                                    <h2
                                        className="dz-
                                    title counter m-b0"
                                    >
                                        50,672
                                    </h2>
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
                                    bookid : '8c845b99-d2c8-5767-a3f1-2c7571b70145',
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
                                    bookid : '3cd565fe-4c28-55c3-b12b-450c189530a2',
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
                                    bookid : 'd1230f26-e52d-5bd5-934e-cb8ecaff26a0',
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
