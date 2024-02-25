import { FaRegHeart } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import useDropDown from "../../hooks/useDropDown";
import { authUncheck } from "../../utils/AuthCheckSlice";

function Header() {
    const dispatch = useDispatch();
    const isLogedin = useSelector((allReducers) => allReducers.LoginSlice.isLogedin);

    const [showProfileDropdown, setShowProfileDropdown] = useDropDown();
    const [showCartDropdown, setShowCartDropdown] = useDropDown();

    return (
        <header className="site-header mo-left header style-1">
            {/* Main Header */}
            <div className="header-info-bar">
                <div className="container clearfix">
                    {/* Website Logo */}
                    <div className="logo-header logo-dark">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    {/* EXTRA NAV */}
                    <div className="extra-nav">
                        <div className="extra-cell">
                            <ul className="navbar-nav header-right">
                                {isLogedin && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/user/wishlist">
                                                <FaRegHeart color="#000" />
                                                <span className="badge">21</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <button type="button" className="nav-link box cart-btn" onClick={setShowCartDropdown}>
                                                <MdOutlineShoppingCart color="#000" />
                                                <span className="badge">5</span>
                                            </button>
                                            {showCartDropdown && (
                                                <ul className="dropdown-menu cart-list d-block" onClick={(e) => e.stopPropagation()}>
                                                    <li className="cart-item">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="books-detail.html">
                                                                    <img alt="" className="media-object" src="https://picsum.photos/500/300?random=1" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="dz-title">
                                                                    <a href="books-detail.html" className="media-heading">
                                                                        Real Life
                                                                    </a>
                                                                </h6>
                                                                <span className="dz-price">$28.00</span>
                                                                <span className="item-close">×</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="books-detail.html">
                                                                    <img alt="" className="media-object" src="https://picsum.photos/500/300?random=1" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="dz-title">
                                                                    <a href="books-detail.html" className="media-heading">
                                                                        Home
                                                                    </a>
                                                                </h6>
                                                                <span className="dz-price">$28.00</span>
                                                                <span className="item-close">×</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <a href="books-detail.html">
                                                                    <img alt="" className="media-object" src="https://picsum.photos/500/300?random=1" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6 className="dz-title">
                                                                    <a href="books-detail.html" className="media-heading">
                                                                        Such a fun age
                                                                    </a>
                                                                </h6>
                                                                <span className="dz-price">$28.00</span>
                                                                <span className="item-close">×</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="cart-item text-center">
                                                        <h6 className="text-secondary">Totle = $500</h6>
                                                    </li>
                                                    <li className="text-center d-flex">
                                                        <a href="shop-cart.html" className="btn btn-sm btn-primary me-2 btnhover w-100">
                                                            View Cart
                                                        </a>
                                                        <a href="shop-checkout.html" className="btn btn-sm btn-outline-primary btnhover w-100">
                                                            Checkout
                                                        </a>
                                                    </li>
                                                </ul>
                                            )}
                                        </li>

                                        <li className="nav-item dropdown profile-dropdown  ms-4">
                                            <a className="nav-link" href="#" role="button" onClick={setShowProfileDropdown}>
                                                <img src="https://i.pravatar.cc/150?img=3" alt="/" />
                                                <div className="profile-info">
                                                    <h6 className="title">Brian</h6>
                                                    <span>info@gmail.com</span>
                                                </div>
                                            </a>

                                            {showProfileDropdown && (
                                                <div className="dropdown-menu py-0 show" style={{ top: "100% !important" }}>
                                                    <div className="dropdown-header">
                                                        <h6 className="m-0">Brian</h6>
                                                        <span>info@gmail.com</span>
                                                    </div>
                                                    <div className="dropdown-body">
                                                        <Link to="/user/profile" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <FaRegUser fontSize="16px" />

                                                                <span className="ms-2">Profile</span>
                                                            </div>
                                                        </Link>
                                                        <Link to="/user/cart" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <MdOutlineShoppingCart fontSize="18px" />
                                                                <span className="ms-2">My Order</span>
                                                            </div>
                                                        </Link>
                                                        <Link to="/user/wishlist" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                            <div>
                                                                <FaRegHeart fontSize="17px" />
                                                                <span className="ms-2">Wishlist</span>
                                                            </div>
                                                        </Link>
                                                    </div>

                                                    <div className="dropdown-footer">
                                                        <button className="btn btn-primary w-100 btnhover btn-sm" onClick={() => dispatch(authUncheck())}>
                                                            Log Out
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* header search nav */}
                    <div className="header-search-nav">
                        <div className="header-item-search">
                            <div className="input-group search-input">
                                <select className="default-select">
                                    <option>Category</option>
                                    <option>Photography </option>
                                    <option>Arts</option>
                                    <option>Adventure</option>
                                    <option>Action</option>
                                    <option>Games</option>
                                    <option>Movies</option>
                                    <option>Comics</option>
                                    <option>Biographies</option>
                                    <option>Children’s Books</option>
                                    <option>Historical</option>
                                    <option>Contemporary</option>
                                    <option>Classics</option>
                                    <option>Education</option>
                                </select>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search Books Here" />
                                <button className="btn" type="button">
                                    <FaMagnifyingGlass />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Header End */}
            {/* Main Header */}
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar clearfix">
                    <div className="container clearfix">
                        {/* Website Logo */}
                        <div className="logo-header logo-dark">
                            <a href="index.html">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        {/* Nav Toggle Button */}
                        <button
                            className="navbar-toggler collapsed navicon justify-content-end"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        {/* EXTRA NAV */}
                        {!isLogedin && (
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link to="/login" className="btn btn-primary btnhover">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Main Nav */}
                        <div className="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
                            <div className="logo-header logo-dark">
                                <a href="index.html">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                            <div className="search-input">
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search Books Here" />
                                    <button className="btn" type="button">
                                        <i className="flaticon-loupe" />
                                    </button>
                                </div>
                            </div>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">
                                        <span>Home</span>
                                    </Link>
                                </li>
                                {!isLogedin && (
                                    <li>
                                        <Link to="/login">
                                            <span>Login</span>
                                        </Link>
                                    </li>
                                )}
                                {!isLogedin && (
                                    <li>
                                        <Link to="/register">
                                            <span>Register</span>
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link to="/shop">
                                        <span>Shop</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blogs">
                                        <span>Blogs</span>
                                    </Link>
                                </li>
                                {/* <li className="sub-menu-down">
                                    <a href="#">
                                        <span>Blog</span>
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="blog-grid.html">Blog Grid</a>
                                        </li>
                                        <li>
                                            <a href="blog-large-sidebar.html">Blog Large Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="blog-list-sidebar.html">Blog List Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="blog-detail.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li> */}
                                <li>
                                    <Link to="/contact">
                                        <span>Contact Us</span>
                                    </Link>
                                </li>
                            </ul>
                            <div className="dz-social-icon">
                                <ul>
                                    <li>
                                        <a className="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-twitter" target="_blank" href="https://twitter.com/dexignzones" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-linkedin-in" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/" rel="noreferrer" />
                                    </li>
                                    <li>
                                        <a className="fab fa-instagram" target="_blank" href="https://www.instagram.com/website_templates__/" rel="noreferrer" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Header End */}
        </header>
    );
}

export default Header;
