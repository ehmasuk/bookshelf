import Footer from "./footer/Footer";
import Header from "./header/Header";

function Base({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Base;
