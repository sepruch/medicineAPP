import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListMenu from '../components/ListMenu';
import { menuRegistry } from '../data/muscleGroups';
import './TestsPage.css';

function TestsPage() {
    const navigate = useNavigate();

    return (
        <div className="tests-page">
            <main className="tests-content">

                <div className="tests-nav-buttons">
                    <button className="nav-btn latin-btn" onClick={() => navigate('/test-latin-menu/root')}>
                        Латынь
                    </button>
                    <button className="nav-btn errors-btn" onClick={() => navigate('/test/errors')}>
                        Ошибки
                    </button>
                    <button className="nav-btn favorites-btn" onClick={() => navigate('/test/favorites')}>
                        Избранное
                    </button>
                </div>

                <h3 className="test-category-title">Анатомические отделы</h3>
                {/* Отправляем пользователя в корень обычных тестов */}
                <ListMenu items={menuRegistry['root']} />
            </main>
        </div>
    );
}

export default TestsPage;