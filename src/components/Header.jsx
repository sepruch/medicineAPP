import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import back from '../assets/back.svg';

// Словарь: Путь -> Название в хэдере (для статичных страниц)
const routeTitles = {
    '/': 'Миология',
    '/profile': 'Профиль',

    // Справочник: Поверхностные
    '/back-muscles': 'Мышцы спины',
    '/back-muscles/superficial': 'Поверхностные мышцы',
    '/back-muscles/superficial/shoulder-girdle': 'Пояс конечности',
    '/back-muscles/superficial/ribs': 'Мышцы ребер',

    // Справочник: Глубокие
    '/back-muscles/deep': 'Глубокие мышцы',
    '/back-muscles/deep/autochthonous': 'Аутохтонные мышцы',
    '/back-muscles/deep/ventral': 'Вентральные мышцы',
    '/back-muscles/deep/autochthonous/lateral': 'Латеральный тракт',
    '/back-muscles/deep/autochthonous/medial': 'Медиальный тракт',
    '/back-muscles/deep/autochthonous/lateral/erector-spinae': 'm. erector spinae',
    '/back-muscles/deep/autochthonous/medial/transversospinales': 'm. transversospinalis',

    // Раздел тестов и статистики
    '/test': 'Выбор теста',
    '/test/written': 'Тестирование',
    '/test/favorites': 'Избранные тесты',
    '/test/errors': 'Ошибки',
    '/progress': 'Моя статистика'
};

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const showBackButton = location.pathname !== '/';

    // 1. Сначала пытаемся найти точное совпадение в словаре
    let title = routeTitles[location.pathname];

    // 2. Если точного совпадения нет, проверяем динамические пути
    if (!title) {
        if (location.pathname.startsWith('/test-latin-menu')) {
            title = 'Тест (Латынь)';
        } else if (location.pathname.startsWith('/test-menu')) {
            title = 'Тестирование';
        } else if (location.pathname.startsWith('/muscle')) {
            title = 'Информация о мышце';
        } else {
            // Если путь совсем не распознан
            title = 'Миология';
        }
    }

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