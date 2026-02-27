import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import Header from './components/Header.jsx';
import HeadMusclesPage from './pages/HeadMusclesPage.jsx';
import MimicMusclesPage from './pages/MimicMusclesPage.jsx';
import EyeMusclesPage from './pages/EyeMusclesPage.jsx';
import ProcerusDetailPage from './pages/ProcerusDetailPage.jsx';
import TestsPage from './pages/TestsPage.jsx';
import TestWrittenPage from './pages/TestWrittenPage.jsx';
/*import ProgressPage from './pages/ProgressPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';*/
import './App.css';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/test" element={<TestsPage />} />
                <Route path="/test/written" element={<TestWrittenPage />} />

                {/* 1 уровень */}
                <Route path="/head-muscles" element={<HeadMusclesPage />} />

                {/* 2 уровень */}
                <Route path="/head-muscles/mimic" element={<MimicMusclesPage />} />
                {/* <Route path="/head-muscles/masticatory" element={<MasticatoryMusclesPage />} /> */}

                {/* 3 уровень */}
                <Route path="/head-muscles/mimic/eye" element={<EyeMusclesPage />} />
                <Route path="/muscle/procerus" element={<ProcerusDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;