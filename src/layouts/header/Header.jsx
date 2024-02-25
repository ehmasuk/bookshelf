import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { authUncheck } from "../../utils/AuthCheckSlice";

function Header() {
    const dispatch = useDispatch();
    const isLogedin = useSelector((allReducers) => allReducers.LoginSlice.isLogedin);


    return (
        <header className="site-header mo-left header style-1">
            {/* Main Header */}
            <div className="header-info-bar">
                <div className="container clearfix">
                    {/* Website Logo */}
                    <div className="logo-header logo-dark">
                        <a href="index.html">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    {/* EXTRA NAV */}
                    <div className="extra-nav">
                        <div className="extra-cell">
                            <ul className="navbar-nav header-right">
                                <li className="nav-item">
                                    <a className="nav-link" href="wishlist.html">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                                        </svg>
                                        <span className="badge">21</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link box cart-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                        </svg>
                                        <span className="badge">5</span>
                                    </button>
                                    <ul className="dropdown-menu cart-list">
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
                                </li>
                                {isLogedin && (
                                    <li className="nav-item dropdown profile-dropdown  ms-4">
                                        <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="https://i.pravatar.cc/150?img=3" alt="/" />
                                            <div className="profile-info">
                                                <h6 className="title">Brian</h6>
                                                <span>info@gmail.com</span>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu py-0 dropdown-menu-end">
                                            <div className="dropdown-header">
                                                <h6 className="m-0">Brian</h6>
                                                <span>info@gmail.com</span>
                                            </div>
                                            <div className="dropdown-body">
                                                <Link to="/user/profile" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000">
                                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                                            <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                        </svg>
                                                        <span className="ms-2">Profile</span>
                                                    </div>
                                                </Link>
                                                <Link to="/user/cart" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000">
                                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                                            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                                                        </svg>
                                                        <span className="ms-2">My Order</span>
                                                    </div>
                                                </Link>
                                                <Link to="/user/wishlist" className="dropdown-item d-flex justify-content-between align-items-center ai-icon">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000">
                                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                                            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                                                        </svg>
                                                        <span className="ms-2">Wishlist</span>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div className="dropdown-footer">
                                                <button className="btn btn-primary w-100 btnhover btn-sm" onClick={()=>dispatch(authUncheck())}>
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>
                                    </li>
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
                                    <i className="flaticon-loupe" />
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
