import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TestWrittenPage.css';

// Заглушка базы данных
const mockDatabase = [
    {
        id: 1,
        question: "Какая мышца отвечает за поднятие бровей?",
        options: [
            { id: 'a', text: "Лобная мышца" },
            { id: 'b', text: "Круговая мышца глаза" },
            { id: 'c', text: "Жевательная мышца" },
            { id: 'd', text: "Височная мышца" }
        ],
        correctOptionId: 'a'
    },
    {
        id: 2,
        question: "Какая мышца опускает угол рта?",
        options: [
            { id: 'a', text: "m. risorius" },
            { id: 'b', text: "m. depressor anguli oris" },
            { id: 'c', text: "m. zygomaticus major" },
            { id: 'd', text: "m. masseter" }
        ],
        correctOptionId: 'b'
    }

];

function TestWrittenPage() {
    const navigate = useNavigate();

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState(null);
    const [isChecked, setIsChecked] = useState(false);

    const totalQuestions = 10; // Ставим 10 как на макете (даже если в мок-базе меньше)
    const currentQuestion = mockDatabase[currentQuestionIndex];

    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const handleOptionClick = (optionId) => {
        if (!isChecked) {
            setSelectedOptionId(optionId);
        }
    };

    const handleActionClick = () => {
        if (!isChecked) {
            setIsChecked(true);
        } else {
            if (currentQuestionIndex < mockDatabase.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedOptionId(null);
                setIsChecked(false);
            } else {
                alert("Тест завершен!");
                navigate('/test');
            }
        }
    };

    const getOptionClassName = (optionId) => {
        let className = "option-card";

        if (!isChecked) {
            if (selectedOptionId === optionId) {
                className += " selected";
            }
        } else {
            if (optionId === currentQuestion.correctOptionId) {
                className += " correct";
            } else if (selectedOptionId === optionId) {
                className += " incorrect";
            }
        }

        return className;
    };

    if (!currentQuestion) return <div>Загрузка...</div>;

    return (
        <div className="test-page-container">
            <div className="progress-section">
                <div className="progress-text">
                    Вопрос {currentQuestionIndex + 1} из {totalQuestions}
                </div>
                <div className="progress-bar-bg">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>

            <div className="question-text">
                {currentQuestion.question}
            </div>

            <div className="options-list">
                {currentQuestion.options.map((option) => (
                    <div
                        key={option.id}
                        className={getOptionClassName(option.id)}
                        onClick={() => handleOptionClick(option.id)}
                    >
                        {option.text}
                    </div>
                ))}
            </div>

            <button
                className="test-action-button"
                onClick={handleActionClick}
                disabled={!selectedOptionId} // Кнопка неактивна, пока не выбран ответ
            >
                {!isChecked ? 'Проверить' : 'Следующий вопрос'}
            </button>
        </div>
    );
}

export default TestWrittenPage;