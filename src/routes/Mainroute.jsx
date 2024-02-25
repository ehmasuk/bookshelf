import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import { useSelector } from "react-redux";
import BlogDetails from "../pages/blogdetails/BlogDetails";
import BlogsPage from "../pages/blogspage/BlogsPage";
import BookDetails from "../pages/bookdetails/BookDetails";
import Contactpage from "../pages/contactpage/Contactpage";
import ProfilePage from "../pages/profilepage/ProfilePage";
import ShopPage from "../pages/shoppage/ShopPage";
import Base from "./../layouts/Base";
import Errorpage from "./../pages/404Error/Errorpage";
import CartPage from "./../pages/Cartpage/CartPage";
import Homepage from "./../pages/homepage/Homepage";
import Loginpage from "./../pages/loginpage/Loginpage";
import Registerpage from "./../pages/registerpage/Registerpage";
import WishlistPage from "./../pages/wishlistpage/WishlistPage";
import CheckAuth from "./CheckAuth";

function Mainroute() {
    const isLogedin = useSelector((allReducers) => allReducers.LoginSlice.isLogedin);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Base>
                                <Homepage />
                            </Base>
                        }
                    />
                    <Route
                        path="/shop"
                        element={
                            <Base>
                                <ShopPage />
                            </Base>
                        }
                    />
                    <Route
                        path="/shop/:bookidperam"
                        element={
                            <Base>
                                <BookDetails />
                            </Base>
                        }
                    />
                    <Route
                        path="/user/profile"
                        element={
                            <CheckAuth isLogedin={isLogedin}>
                                <Base>
                                    <ProfilePage />
                                </Base>
                            </CheckAuth>
                        }
                    />
                    <Route
                        path="/user/cart"
                        element={
                            <CheckAuth isLogedin={isLogedin}>
                                <Base>
                                    <CartPage />
                                </Base>
                            </CheckAuth>
                        }
                    />
                    <Route
                        path="/user/wishlist"
                        element={
                            <CheckAuth isLogedin={isLogedin}>
                                <Base>
                                    <WishlistPage />
                                </Base>
                            </CheckAuth>
                        }
                    />

                    <Route
                        path="/blogs"
                        element={
                            <Base>
                                <BlogsPage />
                            </Base>
                        }
                    />
                    <Route
                        path="/blogs/:blogidperam"
                        element={
                            <Base>
                                <BlogDetails />
                            </Base>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <Base>
                                <Contactpage />
                            </Base>
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <CheckAuth isLogedin={!isLogedin}>
                                <Base>
                                    <Loginpage />
                                </Base>
                            </CheckAuth>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <CheckAuth isLogedin={!isLogedin}>
                                <Base>
                                    <Registerpage />
                                </Base>
                            </CheckAuth>
                        }
                    />

                    <Route
                        path="*"
                        element={
                            <Base>
                                <Errorpage />
                            </Base>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Mainroute;
