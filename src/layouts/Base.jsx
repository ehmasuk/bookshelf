import ScrolTopButton from "../components/ScrolTopButton";
import Footer from "./footer/Footer";
import Header from "./header/Header";

function Base({ children }) {
    return (
        <div>
            <Header />
            {children}
            <ScrolTopButton />
            <Footer />
        </div>
    );
}

export default Base;
