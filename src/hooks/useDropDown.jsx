
// call handleShow method in dropdown button
// condition the dropdown with show variable

import { useState } from "react";

function useDropDown() {
    const [show, setShow] = useState(false);

    document.addEventListener("click", () => setShow(false));

    const handleShow = (e) => {
        e.stopPropagation();
        setShow((prev) => !prev);
    };

    return [show, handleShow];
}

export default useDropDown;
