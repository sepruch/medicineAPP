import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import back from '../assets/back.svg';

// Словарь: Путь -> Название в хэдере
const routeTitles = {
    '/': 'Миология',
    '/test': 'Тесты',
    '/test/written': 'Мышцы головы и шеи',
    '/head-muscles': 'Мышцы головы',
    '/head-muscles/masticatory': 'Жевательные мышцы',
    '/head-muscles/mimic': 'Мимические мышцы',
    '/head-muscles/mimic/eye': 'Окружности глаз',
    // Сюда будете добавлять конечные страницы:
    '/muscle/orbicularis-oculi': 'Круговая мышца глаза',
    '/muscle/procerus': 'Мышца гордецов',
    '/muscle/masseter': 'Жевательная мышца'
};

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const showBackButton = location.pathname !== '/';

    const title = routeTitles[location.pathname] || 'Миология';

    return (
        <header className="app-header">
            <div className="header-container">
                {showBackButton && (
                    <button
                        className="back-button"
                        onClick={() => navigate(-1)}
                        type="button"
                    >
                        <img src={back} alt="Назад" className="bck" />
                    </button>
                )}
                <h1 className="header-title">{title}</h1>
            </div>
        </header>
    );
}

export default Header;