import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout";

function App() {
    gsap.registerPlugin(ScrollTrigger);

    return <Router basename={"portfolio"}>{<MasterLayout />}</Router>;
}

export default App;
