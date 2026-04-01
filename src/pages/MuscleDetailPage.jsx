import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MuscleDetailPage.css';

function MuscleVideoModal({ isOpen, onClose, videoId }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            {/* Остановка всплытия события, чтобы клик по плееру не закрывал окно */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    ×
                </button>
                <div className="video-responsive">
                    {/* Плеер для видео*/}
                    <iframe
                        width="853"
                        height="480"
                        // В будущем вы будете подставлять реальный videoId из базы
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Muscle Function Video"
                    />
                </div>
            </div>
        </div>
    );
}

// 2. Основной компонент страницы
function MuscleDetailPage() {
    // Достаем id мышцы из URL (например, 'trapezius')
    const { id } = useParams();

    // Стейт для управления модальным окном
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    // Функция для открытия модального окна
    const openVideoModal = () => {
        setIsVideoModalOpen(true);
    };

    // Функция для закрытия модального окна
    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
    };

    // --- ЗАГЛУШКИ ДЛЯ ТЕКСТА ---
    // (будет приходить из базы)
    const musclePlaceholders = {
        'trapezius': {
            ruName: 'Трапециевидная мышца',
            videoId: 'dQw4w9WgXcQ' // Пример videoId
        },
        'latissimus-dorsi': {
            ruName: 'Широчайшая мышца спины',
            videoId: 'dQw4w9WgXcQ'
        }
        // ... другие мышцы ...
    };

    const muscle = musclePlaceholders[id] || { ruName: 'Мышца не найдена', videoId: '' };

    return (
        <div className="muscle-detail-page">
            <main className="detail-content">

                {/* Название мышцы */}
                <h2 className="muscle-title-ru">{muscle.ruName}</h2>
                <p className="muscle-title-lat">m. {id}</p>

                {/* Описание мышцы */}
                <div className="muscle-description">
                    <p>
                        Здесь будет располагаться подробное описание мышцы (начало, прикрепление, иннервация).
                        В будущем этот текст будет загружаться из базы данных по ключу: <strong>{id}</strong>.
                    </p>
                    <p>
                        Для просмотра функций этой мышцы и демонстрации её механики нажмите на кнопку ниже.
                    </p>
                </div>

                {/* 4. ОБНОВИЛИ КНОПКУ: она теперь открывает видео */}
                <button className="functions-button" onClick={openVideoModal}>
                    ФУНКЦИИ МЫШЦЫ
                </button>
            </main>

            {/* 5. ПОДКЛЮЧИЛИ МОДАЛЬНОЕ ОКНО */}
            <MuscleVideoModal
                isOpen={isVideoModalOpen}
                onClose={closeVideoModal}
                videoId={muscle.videoId} // Передаем уникальный videoId
            />
        </div>
    );
}

export default MuscleDetailPage;