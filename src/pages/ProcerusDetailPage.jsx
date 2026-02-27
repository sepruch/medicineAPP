import React from 'react';
import './ProcerusDetailPage.css';
import procerus from '../assets/procerus.png';

function ProcerusDetailPage() {
    return (
        <div className="muscle-detail-page">
            <main className="detail-content">
                <div className="image-wrapper">
                <img src={procerus} alt="Мышца гордецов" className="muscle-image" />
                </div>

                <h2 className="muscle-title-ru">Мышца гордецов</h2>
                <p className="muscle-title-lat">m. procerus</p>

                <div className="muscle-description">
                    <p>
                        Начинается от костной спинки носа и апоневроза носовой мышцы,
                        прикрепляется к коже надпереносья (глабеллы).
                    </p>
                    <p>
                        При сокращении опускает кожу надпереносья вниз, вызывая образование
                        поперечных складок над корнем носа (мимика "насупленных бровей", концентрации).
                        Часто действует совместно с мышцей, сморщивающей бровь.
                    </p>
                </div>

                <button className="functions-button">Функции мышцы</button>
            </main>
        </div>
    );
}

export default ProcerusDetailPage;