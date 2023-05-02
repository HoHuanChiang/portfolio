import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HashRouter as Router } from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout";

function App() {
    gsap.registerPlugin(ScrollTrigger);

    return <Router>{<MasterLayout />}</Router>;
}

export default App;
