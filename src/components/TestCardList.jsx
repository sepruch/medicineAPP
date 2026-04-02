import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/TestsPage.css';

const StarIcon = ({ isFavorite, onClick }) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill={isFavorite ? "#3d67ff" : "none"} stroke={isFavorite ? "#3d67ff" : "#cccccc"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="test-star-icon"
         onClick={(e) => { e.stopPropagation(); onClick(); }} >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

export default function TestCardList({ items, isLatin }) {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favoriteMuscles');
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem('favoriteMuscles', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="tests-list">
            {items.map((test) => {
                // Если мы в режиме Латыни, добавляем параметр type=latin
                const testUrl = isLatin
                    ? `/test/written?muscle=${test.id}&type=latin`
                    : `/test/written?muscle=${test.id}`;

                return (
                    <div key={test.id} className="test-card" onClick={() => navigate(testUrl)}>
                        <div className="test-favorite">
                            <StarIcon isFavorite={favorites[test.id]} onClick={() => toggleFavorite(test.id)} />
                        </div>
                        <div className="test-info">
                            <span className="test-ru-name">{test.ruName}</span>
                            {test.latName && <span className="test-lat-name">{test.latName}</span>}
                        </div>
                        <div className="test-progress"><span className="progress-text">0%</span></div>
                    </div>
                );
            })}
        </div>
    );
}