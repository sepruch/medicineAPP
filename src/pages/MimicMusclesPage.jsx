import { useNavigate } from 'react-router-dom';
import './HeadMusclesPage.css'; // Используем те же стили!

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function MimicMusclesPage() {
    const navigate = useNavigate();

    const subgroupsData = [
        { id: 'skull', ruName: 'Мышцы свода черепа', latName: '', path: '/head-muscles/mimic/skull' },
        { id: 'eye', ruName: 'Мышцы окружности глаз', latName: '', path: '/head-muscles/mimic/eye' },
        { id: 'nose', ruName: 'Мышцы окружности носа', latName: '', path: '/head-muscles/mimic/nose' },
        { id: 'mouth', ruName: 'Мышцы окружности рта', latName: '', path: '/head-muscles/mimic/mouth' }
    ];

    return (
        <div className="muscles-page">
            <main className="muscles-content">
                <div className="muscle-list">
                    {subgroupsData.map((sub) => (
                        <div key={sub.id} className="muscle-card" onClick={() => navigate(sub.path)}>
                            <div className="muscle-info">
                                <span className="muscle-ru-name">{sub.ruName}</span>
                            </div>
                            <div className="muscle-arrow"><ChevronRight /></div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default MimicMusclesPage;