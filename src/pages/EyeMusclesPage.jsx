import { useNavigate } from 'react-router-dom';
import './HeadMusclesPage.css';

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function EyeMusclesPage() {
    const navigate = useNavigate();

    // Третий уровень — конкретные мышцы. Они ведут уже на страницу с контентом (статью)
    const musclesData = [
        { id: 'procerus', ruName: 'Мышца гордецов', latName: 'm. procerus', path: '/muscle/procerus' },
        { id: 'orbicularis-oculi', ruName: 'Круговая мышца глаза', latName: 'm. orbicularis oculi', path: '/muscle/orbicularis-oculi' }
    ];

    return (
        <div className="muscles-page">
            <main className="muscles-content">
                <div className="muscle-list">
                    {musclesData.map((muscle) => (
                        <div key={muscle.id} className="muscle-card" onClick={() => navigate(muscle.path)}>
                            <div className="muscle-info">
                                <span className="muscle-ru-name">{muscle.ruName}</span>
                                <span className="muscle-lat-name">{muscle.latName}</span>
                            </div>
                            <div className="muscle-arrow"><ChevronRight /></div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default EyeMusclesPage;