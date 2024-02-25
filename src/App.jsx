import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Mainroute from "./routes/Mainroute";

function App() {
    const [screenLoading, setScreenLoading] = useState(false);

    useEffect(() => {
        setScreenLoading(true);
        setTimeout(() => {
            setScreenLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            {screenLoading ? (
                <div id="loading-area" className="preloader-wrapper-1">
                    <div className="preloader-inner">
                        <div className="preloader-shade"></div>
                        <div className="preloader-wrap"></div>
                        <div className="preloader-wrap wrap2"></div>
                        <div className="preloader-wrap wrap3"></div>
                        <div className="preloader-wrap wrap4"></div>
                        <div className="preloader-wrap wrap5"></div>
                    </div>
                </div>
            ) : (
                <div>
                    <Toaster position="bottom-center" />
                    <Mainroute />
                </div>
            )}
        </div>
    );
}

export default App;
