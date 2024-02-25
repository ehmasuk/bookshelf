import { Link } from "react-router-dom";

function ShopSingleBook({ book, bookview }) {
    console.log(bookview);

    if (bookview === "list")
        return (
            <div className="col-md-12 col-sm-12">
                <div className="dz-shop-card style-2">
                    <div className="dz-media">
                        <img src={book.img} alt="book" />
                    </div>
                    <div className="dz-content">
                        <div className="dz-header">
                            <div>
                                <ul className="dz-tags">
                                    <li>
                                        <a href="books-list-view-sidebar.html">ADVANTURE,</a>
                                    </li>
                                    <li>
                                        <a href="books-list-view-sidebar.html">SCIENCE,</a>
                                    </li>
                                    <li>
                                        <a href="books-list-view-sidebar.html">COMEDY</a>
                                    </li>
                                </ul>
                                <h4 className="title mb-0">
                                    <Link to={`/shop/${book.bookid}`}>{book.title}</Link>
                                </h4>
                            </div>
                            <div className="price">
                                <span className="price-num text-primary">$50.78</span>
                                <del>$80.00</del>
                            </div>
                        </div>
                        <div className="dz-body">
                            <div className="dz-rating-box">
                                <div>
                                    <p className="dz-para">{book.descrption}</p>
                                    <div>
                                        <a href="pricing.html" className="badge">
                                            Get 20% Discount for today
                                        </a>
                                        <a href="pricing.html" className="badge">
                                            50% OFF Discount
                                        </a>
                                        <a href="pricing.html" className="badge next-badge">
                                            See 2+ promos
                                        </a>
                                    </div>
                                </div>
                                <div className="review-num">
                                    <h4>4.2</h4>
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
                                            <i className="flaticon-star text-muted" />
                                        </li>
                                    </ul>
                                    <span>
                                        <a href="#"> 235 Reviews</a>
                                    </span>
                                </div>
                            </div>
                            <div className="rate">
                                <ul className="book-info">
                                    <li>
                                        <span>Writen by</span>Kevin Smiley
                                    </li>
                                    <li>
                                        <span>Publisher</span>Printarea Studios
                                    </li>
                                    <li>
                                        <span>Year</span>2019
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <a href="shop-cart.html" className="btn btn-secondary btnhover2">
                                        <i className="flaticon-shopping-cart-1 m-r10" /> Add to cart
                                    </a>
                                    <div className="bookmark-btn style-1">
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault30" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault30">
                                            <i className="flaticon-heart" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div className="col-book style-2">
                <div className="dz-shop-card style-1">
                    <div className="dz-media">
                        <img src={book.img} alt="book" />
                    </div>
                    <div className="bookmark-btn style-2">
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                        <label className="form-check-label" htmlFor="flexCheckDefault1">
                            <i className="flaticon-heart" />
                        </label>
                    </div>
                    <div className="dz-content">
                        <h5 className="title">
                            <Link to={`/shop/${book.bookid}`}>{book.title}</Link>
                        </h5>
                        <ul className="dz-tags">
                            <li>
                                <a href="books-grid-view.html">ADVANTURE,</a>
                            </li>
                            <li>
                                <a href="books-grid-view.html">SCIENCE,</a>
                            </li>
                        </ul>
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
                                <i className="flaticon-star text-muted" />
                            </li>
                        </ul>
                        <div className="book-footer">
                            <div className="price">
                                <span className="price-num">${book.oldPrice}</span>
                                <del>${book.newPrice}</del>
                            </div>
                            <a href="shop-cart.html" className="btn btn-secondary box-btn btnhover2">
                                <i className="flaticon-shopping-cart-1 m-r10" /> Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default ShopSingleBook;
