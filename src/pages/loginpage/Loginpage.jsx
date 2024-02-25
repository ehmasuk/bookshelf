import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authCheck } from "../../utils/AuthCheckSlice";
import Breadcumb from "../../components/Breadcumb";

const userInfoDefault = { email: "eve.holt@reqres.in", password: "cityslicka" };

function Loginpage() {
    const dispatch = useDispatch();

    const [isLoading, setisLoading] = useState(null);

    const userLogin = (url, info) => {
        setisLoading(true);
        axios
            .post(url, info)
            .then((res) => {
                localStorage.setItem("isLogedin", JSON.stringify(res.data));
                dispatch(authCheck());
                setisLoading(null);
                setUserInfo(userInfoDefault);
            })
            .catch((err) => {
                console.log(err.message);
                toast.error("Invalid email or password");
            })
            .finally(() => {
                setisLoading(null);
            });
    };

    const [userInfo, setUserInfo] = useState(userInfoDefault);

    const handleLoginSubmit = (ev) => {
        ev.preventDefault();
        userLogin("https://reqres.in/api/login", { ...userInfo, userid: crypto.randomUUID() });
    };

    const handleLoginChange = (ev) => {
        const name = ev.target.name;
        const value = ev.target.value;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div className="page-content">
            <Breadcumb />
            {/* contact area */}
            <section className="content-inner shop-account">
                {/* Product */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="login-area">
                                <div className="tab-content">
                                    <h4>NEW CUSTOMER</h4>
                                    <p>
                                        By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your
                                        orders in your account and more.
                                    </p>
                                    <Link className="btn btn-primary btnhover m-r5 button-lg radius-no" to="/register">
                                        CREATE AN ACCOUNT
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="login-area">
                                <div className="tab-content nav">
                                    <form id="login" onSubmit={handleLoginSubmit} className="tab-pane active col-12">
                                        <h4 className="text-secondary">LOGIN</h4>
                                        <p className="font-weight-600">If you have an account with us, please log in.</p>
                                        <div className="mb-4">
                                            <label className="label-title">E-MAIL *</label>
                                            <input onChange={handleLoginChange} name="email" value={userInfo.email} className="form-control" placeholder="Your Email Id" type="email" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="label-title">PASSWORD *</label>
                                            <input
                                                onChange={handleLoginChange}
                                                name="password"
                                                value={userInfo.password}
                                                required=""
                                                className="form-control "
                                                placeholder="Type Password"
                                                type="password"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <button className={`btn btn-primary btnhover me-2 ${isLoading && "disabled"}`}>Login {isLoading && <i className="fas fa-spinner fa-spin"></i>}</button>
                                            <a data-bs-toggle="tab" href="#forgot-password" className="m-l5">
                                                <i className="fas fa-unlock-alt" /> Forgot Password
                                            </a>
                                        </div>
                                    </form>
                                    <form id="forgot-password" className="tab-pane fade  col-12">
                                        <h4 className="text-secondary">FORGET PASSWORD ?</h4>
                                        <p className="font-weight-600">We will send you an email to reset your password. </p>
                                        <div className="mb-3">
                                            <label className="label-title">E-MAIL *</label>
                                            <input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
                                        </div>
                                        <div className="text-left">
                                            <a className="btn btn-outline-secondary btnhover m-r10" data-bs-toggle="tab" href="#login">
                                                Back
                                            </a>
                                            <button className="btn btn-primary btnhover">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product END */}
            </section>
            {/* contact area End*/}
        </div>
    );
}

export default Loginpage;
