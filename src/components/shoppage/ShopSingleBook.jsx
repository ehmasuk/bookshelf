import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { addtoCart } from "../../utils/CartSlice";
import { useDispatch } from "react-redux";

function ShopSingleBook({ book }) {

    const dispatch = useDispatch()



    return (
        <div className="col-md-12 col-sm-12">
            <div className="dz-shop-card style-2">
                <div className="dz-media">
                    <img src={book.img_src} alt="book" />
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
                                <Link to={`/shop/${book.id}`}>{book.title}</Link>
                            </h4>
                        </div>
                        <div className="price">
                            <span className="price-num text-primary">{book.old_price}</span>
                            <del>{book.price}</del>
                        </div>
                    </div>
                    <div className="dz-body">
                        <div className="dz-rating-box">
                            <div>
                                <p className="dz-para">{book.short_des}</p>
                                <div>
                                    <a href="pricing.html" className="badge">
                                        {book.off} Discount
                                    </a>
                                </div>
                            </div>
                            <div className="review-num">
                                <h4>{book.rating}.00</h4>
                                <Rating initialRating={book.rating} readonly emptySymbol={<FaRegStar color="#FFA808" />} fullSymbol={<FaStar color="#FFA808" />} />
                                <span>
                                    <a href="#">{book.ratings}</a>
                                </span>
                            </div>
                        </div>
                        <div className="rate">
                            <ul className="book-info">
                                <li>
                                    <span>Writen by</span>
                                    {book.author}
                                </li>
                                <li>
                                    <span>Publisher</span>Printarea Studios
                                </li>
                                <li>
                                    <span>Year</span>2019
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button onClick={()=>dispatch(addtoCart(book))} className="btn btn-secondary btnhover2">
                                    <i className="flaticon-shopping-cart-1 m-r10" /> Add to cart
                                </button>
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
}

export default ShopSingleBook;
