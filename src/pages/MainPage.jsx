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

                    <Link to="/back-muscles" className="muscle-link back-link">
                        <span className="muscle-text">Мышцы спины</span>

                        {/* Контейнер для двух линий */}
                        <div className="line-wrapper">
                            <div className="muscle-line-horizontal"></div>
                            <div className="muscle-line-angled"></div>
                        </div>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MainPage;
