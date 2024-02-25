import { FaArrowUp } from "react-icons/fa6";



function ScrolTopButton() {
    return (
        <button className={`scroltop ${window.scrollY === "150vh" && "d-block"}`} onClick={() => window.scrollTo({ top: 0 })}>
            <FaArrowUp />
        </button>
    );
}

export default ScrolTopButton;
