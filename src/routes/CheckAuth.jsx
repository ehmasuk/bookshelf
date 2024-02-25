import { Navigate } from "react-router-dom";

function CheckAuth({ isLogedin, children }) {
    if (!isLogedin) {
        return <Navigate to="/" replace />;
    } else {
        return children;
    }
}

export default CheckAuth;
