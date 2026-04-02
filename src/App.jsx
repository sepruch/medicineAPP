import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import MainPage from './pages/MainPage.jsx';
import ProgressPage from "./pages/ProgressPage.jsx";
import ProfilePage from './pages/ProfilePage.jsx';
import './App.css';

// === ИМПОРТЫ ДЛЯ СПРАВОЧНИКА МЫШЦ ===
import BackMusclesPage from './pages/BackMusclesPage.jsx';
import SuperficialMusclesPage from './pages/SuperficialMusclesPage.jsx';
import DeepMusclesPage from './pages/DeepMusclesPage.jsx';
import ShoulderGirdleMusclesPage from './pages/ShoulderGirdleMusclesPage.jsx';
import RibsGirdleMusclesPage from './pages/RibsGirdleMusclesPage.jsx';
import AutochthonousMusclesPage from './pages/AutochthonousMusclesPage.jsx';
import VentralDeepMusclesPage from './pages/VentralDeepMusclesPage.jsx';
import LateralTractPage from './pages/LateralTractPage.jsx';
import MedialTractPage from './pages/MedialTractPage.jsx';
import ErectorSpinaePage from './pages/ErectorSpinaePage.jsx';
import TransversospinalesPage from './pages/TransversospinalesPage.jsx';
import MuscleDetailPage from './pages/MuscleDetailPage.jsx';

// === ИМПОРТЫ ДЛЯ ТЕСТОВ ===
import TestsPage from './pages/TestsPage.jsx';
import TestWrittenPage from './pages/TestWrittenPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import ErrorsPage from './pages/ErrorsPage.jsx';
import TestHierarchyPage from './pages/TestHierarchyPage.jsx';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                {/* Главная страница */}
                <Route path="/" element={<MainPage />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/profile" element={<ProfilePage />} />

                {/* ========================================== */}
                {/* 1. РОУТЫ СПРАВОЧНИКА (Иерархия папок)      */}
                {/* ========================================== */}

                {/* 1 уровень */}
                <Route path="/back-muscles" element={<BackMusclesPage />} />

                {/* 2 уровень */}
                <Route path="/back-muscles/superficial" element={<SuperficialMusclesPage />} />
                <Route path="/back-muscles/deep" element={<DeepMusclesPage />} />

                {/* 3 уровень */}
                <Route path="/back-muscles/superficial/shoulder-girdle" element={<ShoulderGirdleMusclesPage />} />
                <Route path="/back-muscles/superficial/ribs" element={<RibsGirdleMusclesPage />} />
                <Route path="/back-muscles/deep/autochthonous" element={<AutochthonousMusclesPage />} />
                <Route path="/back-muscles/deep/ventral" element={<VentralDeepMusclesPage />} />

                {/* 4 уровень */}
                <Route path="/back-muscles/deep/autochthonous/lateral" element={<LateralTractPage />} />
                <Route path="/back-muscles/deep/autochthonous/medial" element={<MedialTractPage />} />

                {/* 5 уровень */}
                <Route path="/back-muscles/deep/autochthonous/lateral/erector-spinae" element={<ErectorSpinaePage />} />
                <Route path="/back-muscles/deep/autochthonous/medial/transversospinales" element={<TransversospinalesPage />} />

                {/* Универсальная страница конкретной мышцы (всегда внизу справочника!) */}
                <Route path="/muscle/:id" element={<MuscleDetailPage />} />

                {/* ========================================== */}
                {/* 2. РОУТЫ ТЕСТИРОВАНИЯ                      */}
                {/* ========================================== */}

                {/* Статичные страницы тестов */}
                <Route path="/test" element={<TestsPage />} />
                <Route path="/test/written" element={<TestWrittenPage />} />
                <Route path="/test/favorites" element={<FavoritesPage />} />
                <Route path="/test/errors" element={<ErrorsPage />} />

                {/* ДИНАМИЧЕСКИЕ ПУТИ (Эти две строчки заменяют десятки файлов!)
                    Они автоматически генерируют навигацию на основе вашего muscleGroups.js
                */}
                <Route path="/test-menu/:category" element={<TestHierarchyPage />} />
                <Route path="/test-latin-menu/:category" element={<TestHierarchyPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;