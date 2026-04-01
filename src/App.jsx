import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import Header from './components/Header.jsx';
import BackMusclesPage from './pages/BackMusclesPage.jsx';
import SuperficialMusclesPage from './pages/SuperficialMusclesPage.jsx';
import DeepMusclesPage from './pages/DeepMusclesPage.jsx';

import MuscleDetailPage from './pages/MuscleDetailPage.jsx';
import ShoulderGirdleMusclesPage from './pages/ShoulderGirdleMusclesPage.jsx';
import RibsGirdleMusclesPage from './pages/RibsGirdleMusclesPage.jsx';
import TestsPage from './pages/TestsPage.jsx';
import TestWrittenPage from './pages/TestWrittenPage.jsx';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/test" element={<TestsPage />} />
                <Route path="/test/written" element={<TestWrittenPage />} />

                {/* 1 уровень: Главная категория */}
                <Route path="/back-muscles" element={<BackMusclesPage />} />

                {/* 2 уровень: Поверхностные и Глубокие */}
                <Route path="/back-muscles/superficial" element={<SuperficialMusclesPage />} />
                <Route path="/back-muscles/deep" element={<DeepMusclesPage />} />

                {/* 3 уровень: Конкретные группы мышц */}
                <Route path="/back-muscles/superficial/shoulder-girdle" element={<ShoulderGirdleMusclesPage />} />
                <Route path="/back-muscles/superficial/ribs" element={<RibsGirdleMusclesPage />} />

                {/* 4 уровень: Конкретная мышца */}
                <Route path="/muscle/:id" element={<MuscleDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;