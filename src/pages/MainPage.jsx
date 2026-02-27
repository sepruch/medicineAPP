import "./MainPage.css";
import man from "../assets/man.PNG";
import Footer from '../components/Footer.jsx';
import {Link} from "react-router-dom";

function MainPage() {
    return (
        <div className="page-wrapper">
            <main className="content">
                <div className="image-container">
                    <img className="man-image" src={man} alt="человек" />

                    <Link to="/head-muscles" className="muscle-link head-link">
                        <span className="muscle-text">Мышцы головы</span>
                        <div className="muscle-line"></div>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MainPage;
