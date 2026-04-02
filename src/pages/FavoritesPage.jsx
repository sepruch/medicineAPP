import React, { useState, useEffect } from 'react';
import TestCardList from '../components/TestCardList';
import {
    shoulderGirdleMuscles, ribsMuscles, lateralTractMuscles,
    medialTractMuscles, erectorSpinaeMuscles, transversospinalesMuscles, ventralDeepMuscles
} from '../data/muscleGroups';

export default function FavoritesPage() {
    // Используем состояние, чтобы страница могла обновляться
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favoriteMuscles');
        return saved ? JSON.parse(saved) : {};
    });

    // Слушаем изменение хранилища, чтобы мгновенно удалять карточки
    useEffect(() => {
        const handleStorageChange = () => {
            const saved = localStorage.getItem('favoriteMuscles');
            setFavorites(saved ? JSON.parse(saved) : {});
        };

        // Можно вызывать эту функцию из TestCardList, но проще повесить слушатель
        // на событие (работает даже если изменения были в другой вкладке)
        window.addEventListener('storage', handleStorageChange);

        // Интервал для локального обновления (так как localstorage в рамках одной вкладки не всегда вызывает 'storage')
        const interval = setInterval(handleStorageChange, 500);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    const allMuscles = [
        ...shoulderGirdleMuscles, ...ribsMuscles, ...erectorSpinaeMuscles,
        ...transversospinalesMuscles, ...lateralTractMuscles, ...medialTractMuscles, ...ventralDeepMuscles,
        { id: 'splenius-capitis', ruName: 'Ременная мышца головы', latName: 'm. splenius capitis' },
        { id: 'splenius-cervicis', ruName: 'Ременная мышца шеи', latName: 'm. splenius cervicis' }
    ];

    const favoriteItems = allMuscles.filter(m => favorites[m.id]);

    return (
        <div className="tests-page">
            <main className="tests-content">
                {favoriteItems.length > 0 ? (
                    <TestCardList items={favoriteItems} isLatin={false} />
                ) : (
                    <p style={{textAlign: 'center', color: '#888', marginTop: '50px'}}>У вас пока нет избранных тестов</p>
                )}
            </main>
        </div>
    );
}