import './App.scss';

import Toolbar from "./components/UI/Toolbar/Toolbar";
import Footer from "./components/UI/Footer/Footer";
import Menu from "./components/UI/Menu/Menu";

import Homepage from "./components/Content/Homepage/Homepage";
import Roadmap from "./components/Content/Roadmap/Roadmap";
import Certification from "./components/Content/Certification/Certification";
import About from "./components/Content/About/About";
import Contact from "./components/Content/Contact/Contact";
import {useState} from "react";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <Toolbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections" onClick={() => setMenuOpen(false)}>
                <Homepage/>
                <Roadmap/>
                <Certification/>
                <About/>
                <Contact/>
            </div>
            <Footer setMenuOpen={() => setMenuOpen(false)}/>
        </div>
    );
}

export default App;
