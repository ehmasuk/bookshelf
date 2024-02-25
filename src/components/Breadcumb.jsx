import { Link, useLocation } from "react-router-dom";

function Breadcumb() {


    const location = useLocation()

    console.log(location);


    return (
        <div className="dz-bnr-inr overlay-secondary-dark dz-bnr-inr-sm" style={{ backgroundImage: "url(images/background/bg3.jpg)" }}>
            <div className="container">
                <div className="dz-bnr-inr-entry">
                    <h1>Login</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link href="/"> Home</Link>
                            </li>
                            <li className="breadcrumb-item">Login</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Breadcumb;
