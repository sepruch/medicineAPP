import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

export default function ProfilePage() {
    const navigate = useNavigate();

    // Заглушка данных пользователя (в будущем подтянется из базы или контекста)
    const user = {
        name: 'Студент-Медик',
        email: 'student@med.ru',
        university: 'МГМУ им. И.М. Сеченова', // Можно заменить или убрать
        course: 2
    };

    return (
        <div className="profile-page">
            <main className="profile-content">

                {/* Шапка профиля с аватаркой */}
                <div className="profile-header-card">
                    <div className="profile-avatar">
                        {/* Простая SVG-заглушка для аватара */}
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div className="profile-user-info">
                        <h2 className="profile-name">{user.name}</h2>
                        <p className="profile-email">{user.email}</p>
                        <p className="profile-university">{user.university}, {user.course} курс</p>
                    </div>
                </div>

                {/* Меню навигации профиля */}
                <h3 className="profile-section-title">Моё обучение</h3>
                <div className="profile-menu">
                    <div className="profile-menu-item" onClick={() => navigate('/progress')}>
                        <div className="menu-icon progress-icon">📊</div>
                        <span className="menu-text">Моя статистика</span>
                        <div className="menu-arrow">❯</div>
                    </div>

                    <div className="profile-menu-item" onClick={() => navigate('/test/favorites')}>
                        <div className="menu-icon favorites-icon">⭐</div>
                        <span className="menu-text">Избранные тесты</span>
                        <div className="menu-arrow">❯</div>
                    </div>

                    <div className="profile-menu-item" onClick={() => navigate('/test/errors')}>
                        <div className="menu-icon errors-icon">📝</div>
                        <span className="menu-text">Работа над ошибками</span>
                        <div className="menu-arrow">❯</div>
                    </div>
                </div>

                {/* Настройки (пока заглушки) */}
                <h3 className="profile-section-title">Настройки</h3>
                <div className="profile-menu">
                    <div className="profile-menu-item" onClick={() => alert('В будущем здесь будет смена темы!')}>
                        <div className="menu-icon">🌙</div>
                        <span className="menu-text">Темная тема</span>
                        <div className="menu-arrow">❯</div>
                    </div>
                    <div className="profile-menu-item" onClick={() => alert('В будущем здесь будет сброс прогресса!')}>
                        <div className="menu-icon">🔄</div>
                        <span className="menu-text">Сбросить прогресс</span>
                        <div className="menu-arrow">❯</div>
                    </div>
                </div>

            </main>
        </div>
    );
}