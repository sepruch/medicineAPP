import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressPage.css';

export default function ProgressPage() {
    const navigate = useNavigate();

    // Заглушки данных (позже будут приходить из вашей БД или localStorage)
    const stats = {
        total: 24,
        passed: 8,       // Пройдено идеально
        withErrors: 4,   // Пройдено с ошибками
        unsolved: 12     // Еще не открывали
    };

    // Вычисляем проценты для CSS градиента круговой диаграммы
    const passedPct = Math.round((stats.passed / stats.total) * 100);
    const errorsPct = Math.round((stats.withErrors / stats.total) * 100);

    // Формируем строку градиента.
    // Пример: зеленый от 0% до 33%, оранжевый от 33% до 50%, серый от 50% до 100%
    const pieStyle = {
        background: `conic-gradient(
            #4CAF50 0% ${passedPct}%, 
            #FFB300 ${passedPct}% ${passedPct + errorsPct}%, 
            #E0E0E0 ${passedPct + errorsPct}% 100%
        )`
    };

    return (
        <div className="tests-page">
            <main className="tests-content">

                <div className="progress-container">
                    {/* КРУГОВАЯ ДИАГРАММА */}
                    <div className="chart-section">
                        <div className="donut-chart" style={pieStyle}>
                            <div className="donut-hole">
                                <span className="donut-percentage">{passedPct}%</span>
                                <span className="donut-label">Изучено</span>
                            </div>
                        </div>
                    </div>

                    {/* КАРТОЧКИ СО СТАТИСТИКОЙ */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-value total-val">{stats.total}</div>
                            <div className="stat-name">Всего тестов</div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-value passed-val">{stats.passed}</div>
                            <div className="stat-name">Пройдено успешно</div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-value errors-val">{stats.withErrors}</div>
                            <div className="stat-name">Пройдено с ошибками</div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-value unsolved-val">{stats.unsolved}</div>
                            <div className="stat-name">Не решено</div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button className="nav-btn" style={{ backgroundColor: '#EAEAEA', color: '#333' }} onClick={() => navigate(-1)}>
                        Вернуться назад
                    </button>
                </div>
            </main>
        </div>
    );
}