import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { menuRegistry } from '../data/muscleGroups';
import TestCardList from '../components/TestCardList';
// Обязательно импортируем стили карточек папок
import '../pages/BackMusclesPage.css';
import './TestsPage.css';

// Копируем иконку шеврона сюда
const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function TestHierarchyPage() {
    const { category } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Проверяем, это тест по латыни или обычный?
    const isLatin = location.pathname.startsWith('/test-latin-menu');

    const items = menuRegistry[category];

    if (!items) return <div style={{textAlign: 'center', marginTop: '50px'}}>Категория не найдена</div>;

    // РАЗДЕЛЯЕМ ЭЛЕМЕНТЫ:
    // 1. Папки (ведут глубже в иерархию). Их путь НЕ начинается на /muscle/
    const folderItemsRaw = items.filter(item => !item.path.startsWith('/muscle/'));

    // 2. Конечные тесты-мышцы. Их путь начинается строго на /muscle/
    const muscleItems = items.filter(item => item.path.startsWith('/muscle/'));

    // Подготавливаем правильные динамические пути для папок
    const folderItems = folderItemsRaw.map(item => {
        const parts = item.path.split('/');
        const targetCategory = parts[parts.length - 1];
        const basePath = isLatin ? '/test-latin-menu' : '/test-menu';

        return { ...item, path: `${basePath}/${targetCategory}` };
    });

    return (
        <div className="tests-page">
            <main className="tests-content">
                <h2 className="tests-page-title">
                    {isLatin ? 'Выберите раздел или мышцу' : 'Выберите раздел или мышцу'}
                </h2>

                {/* РИСУЕМ ПАПКИ ВРУЧНУЮ, чтобы избежать бага с высотой экрана */}
                {folderItems.length > 0 && (
                    <div className="muscle-list">
                        {folderItems.map(item => (
                            <div key={item.id} className="muscle-card" onClick={() => navigate(item.path)}>
                                <div className="muscle-info">
                                    <span className="muscle-ru-name">{item.ruName}</span>
                                    {item.latName && <span className="muscle-lat-name">{item.latName}</span>}
                                </div>
                                <div className="muscle-arrow"><ChevronRight /></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ВЫВОДИМ КАРТОЧКИ ТЕСТОВ (со звездочками) */}
                {muscleItems.length > 0 && (
                    <div style={{ marginTop: folderItems.length > 0 ? '20px' : '0' }}>
                        <TestCardList items={muscleItems} isLatin={isLatin} />
                    </div>
                )}
            </main>
        </div>
    );
}