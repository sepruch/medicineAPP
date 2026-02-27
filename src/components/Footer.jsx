import { NavLink } from 'react-router-dom';
import './Footer.css';
import profile from '../assets/profile.svg';
import tests from '../assets/tests.svg';
import statistics from '../assets/statistics.svg';
import main from '../assets/main.svg';

function Footer() {
    return (
        <footer className="footer-nav">
            <NavLink to="/" className="nav-item">
                <img src={main} alt="Главная" className={'icons'} />
                <span className="text">Главная</span>
            </NavLink>

            <NavLink to="/test" className="nav-item">
                <img src={tests} alt="Тесты" className={'icons'} />
                <span className="text">Тесты</span>
            </NavLink>

            <NavLink to="/progress" className="nav-item">
                <img src={statistics} alt="Прогресс" className={'icons'} />
                <span className="text">Прогресс</span>
            </NavLink>

            <NavLink to="/profile" className="nav-item">
                <img src={profile} alt="Профиль" className={'icons'} />
                <span className="text">Профиль</span>
            </NavLink>
        </footer>
    );
}

export default Footer;