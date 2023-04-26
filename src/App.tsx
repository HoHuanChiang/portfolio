import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MasterLayout from "./components/MasterLayout/MasterLayout";

function App() {
    return (
        <div>
            <Router>
                <MasterLayout />
            </Router>
        </div>
    );
}

export default App;
