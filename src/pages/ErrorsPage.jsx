import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TestsPage.css'; // Используем общие стили страниц тестов

export default function ErrorsPage() {
    const navigate = useNavigate();

    return (
        <div className="tests-page">
            <main className="tests-content">

                {/* Карточка-заглушка */}
                <div style={{
                    backgroundColor: '#FFFFFF',
                    padding: '40px 20px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.04)'
                }}>
                    <h3 style={{ color: '#333', marginBottom: '15px' }}>Здесь будут ваши ошибки</h3>
                    <p style={{ color: '#888', lineHeight: '1.6', maxWidth: '400px', margin: '0 auto' }}>
                        В будущем на этой странице будут отображаться вопросы и мышцы, в которых вы допустили ошибки при прохождении тестов.
                        <br/><br/>
                        Данные будут автоматически загружаться из базы данных.
                    </p>

                    <button
                        onClick={() => navigate(-1)}
                        style={{
                            marginTop: '30px',
                            padding: '12px 24px',
                            backgroundColor: '#EAEAEA',
                            color: '#333',
                            border: 'none',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            transition: 'background 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#DCDCDC'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#EAEAEA'}
                    >
                        Вернуться назад
                    </button>
                </div>
            </main>
        </div>
    );
}