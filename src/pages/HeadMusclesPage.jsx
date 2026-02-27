import { useNavigate } from 'react-router-dom';
import './HeadMusclesPage.css';

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function HeadMusclesPage() {
    const navigate = useNavigate();

    const groupsData = [
        {
            id: 'masticatory',
            ruName: 'Жевательные мышцы',
            latName: 'n. trigeminus',
            path: '/head-muscles/masticatory'
        },
        {
            id: 'mimic',
            ruName: 'Мимические мышцы',
            latName: 'n. facialis',
            path: '/head-muscles/mimic'
        }
    ];

    return (
        <div className="muscles-page">
            <main className="muscles-content">
                <div className="muscle-list">
                    {groupsData.map((group) => (
                        <div key={group.id} className="muscle-card" onClick={() => navigate(group.path)}>
                            <div className="muscle-info">
                                <span className="muscle-ru-name">{group.ruName}</span>
                                <span className="muscle-lat-name">{group.latName}</span>
                            </div>
                            <div className="muscle-arrow"><ChevronRight /></div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default HeadMusclesPage;