import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import './HeadMusclesPage.css';
import './TestsPage.css';
import test from '../assets/test.svg';
import play from '../assets/play.svg';
import clock from '../assets/clock.svg';


function TestsPage() {
    const navigate = useNavigate();

    return (
        <div className="muscles-page">
            <main className="muscles-content">

                <div className="tests-complex-card">
                    <div className="tests-complex-title">Мышцы головы и шеи</div>
                    <div className="tests-actions-row">
                        <button className="test-action-btn" onClick={() => navigate('/test/video')}>
                            <img src={play} alt="старт" />
                            <span>Видео-тесты</span>
                        </button>
                        <button className="test-action-btn" onClick={() => navigate('/test/written')}>
                            <img src={test} alt="тесты" />
                            <span>Тесты</span>
                        </button>
                        <button className="test-action-btn" onClick={() => navigate('/test/latin')}>
                            <img src={clock} alt="часы" />
                            <span>Латынь</span>
                        </button>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}

export default TestsPage;