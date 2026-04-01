import { useNavigate } from 'react-router-dom';
import '../pages/BackMusclesPage.css'; // Убедитесь, что путь к стилям верный

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function ListMenu({ items }) {
    const navigate = useNavigate();

    return (
        <div className="muscles-page">
            <main className="muscles-content">
                <div className="muscle-list">
                    {items.map((item) => (
                        <div key={item.id} className="muscle-card" onClick={() => navigate(item.path)}>
                            <div className="muscle-info">
                                <span className="muscle-ru-name">{item.ruName}</span>
                                {item.latName && <span className="muscle-lat-name">{item.latName}</span>}
                            </div>
                            <div className="muscle-arrow"><ChevronRight /></div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}