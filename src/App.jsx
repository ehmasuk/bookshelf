import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import Mainroute from "./routes/Mainroute";
function App() {
    return (
        <main>
            <Toaster position="bottom-right" toastOptions={{ style: { borderRadius: "10px", background: "#333", color: "#fff" } }} />
            <Mainroute />
        </main>
    );
}

export default App;
