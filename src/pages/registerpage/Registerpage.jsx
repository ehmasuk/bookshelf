import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authCheck } from "../../utils/AuthCheckSlice";
import axios from "axios";

function Registerpage() {

    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({defaultValues : {
        name : 'ehmasuk',
        email : 'eve.holt@reqres.in',
        password : 'pistol',
        confirmpassword : 'pistol',
    }});

    const [regIsLoading,setRegIsLoading] = useState(null)

    const userRegistration = (url,data)=>{
        setRegIsLoading(true)
        axios.post(url,data)
        .then(res=>{
            console.log(res)
            dispatch(authCheck('Registration successful'))
        })
        .catch(err=>console.log(err))
        .finally(()=>{
            setRegIsLoading(null)
        })
    }

    const registerSubmit = (data) => {
        console.log(data);
        userRegistration('https://reqres.in/api/register',data)
    };

    return (
        <div className="page-content">
            {/* inner page banner */}
            <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
                <div className="container">
                    <div className="dz-bnr-inr-entry">
                        <h1>Registration</h1>
                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"> Home</a>
                                </li>
                                <li className="breadcrumb-item">Registration</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* inner page banner End*/}
            {/* contact area */}
            <section className="content-inner shop-account">
                {/* Product */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="login-area">
                                <form onSubmit={handleSubmit(registerSubmit)}>
                                    <h4 className="text-secondary">Registration</h4>
                                    <p className="font-weight-600">If you dont have an account with us, please Registration.</p>
                                    <div className="mb-4">
                                        <label className="label-title">Username *</label>
                                        <input
                                            {...register("name", { required: "You must enter an username" })}
                                            className={`form-control ${errors.name && "is-invalid"}`}
                                            placeholder="Your Username"
                                            type="text"
                                        />
                                        <small className="text-center text-danger">{errors.name?.message}</small>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-title">Email address *</label>
                                        <input
                                            {...register("email", { required: "You must enter an email" })}
                                            className={`form-control ${errors.email && "is-invalid"}`}
                                            placeholder="Your Email address"
                                            type="email"
                                        />
                                        <small className="text-center text-danger">{errors.email?.message}</small>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-title">Password *</label>
                                        <input
                                            {...register("password", {
                                                required: "You must enter a password",
                                            })}
                                            className={`form-control ${errors.password && "is-invalid"}`}
                                            placeholder="Type Password"
                                            type="password"
                                        />
                                        <small className="text-center text-danger">{errors.password?.message}</small>
                                    </div>
                                    <div className="mb-4">
                                        <label className="label-title">Confirm Password *</label>
                                        <input
                                            {...register("confirmpassword", {
                                                required: "Your must confirm your password",
                                                validate: (data) => {
                                                    if (watch("password") !== data) {
                                                        return "Not matched";
                                                    }
                                                },
                                            })}
                                            className={`form-control ${errors.confirmpassword && "is-invalid"}`}
                                            placeholder="Type Password"
                                            type="password"
                                        />
                                        <small className="text-center text-danger">{errors.confirmpassword?.message}</small>
                                    </div>
                                    <div className="mb-5">
                                        <small>
                                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in
                                            our <a href="privacy-policy.html">privacy policy</a>.
                                        </small>
                                    </div>
                                    <div className="text-left">
                                        <button className={`btn btn-primary btnhover w-100 me-2 ${regIsLoading && 'disabled'}`}>Register</button>
                                    </div>
                                </form>
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

export default Registerpage;
