import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListMenu from '../components/ListMenu';
import {
    shoulderGirdleMuscles, ribsMuscles, lateralTractMuscles,
    medialTractMuscles, erectorSpinaeMuscles, transversospinalesMuscles, ventralDeepMuscles
} from '../data/muscleGroups';

function LatinMusclesPage() {
    const navigate = useNavigate();

    // Собираем все мышцы в один плоский список
    const allMuscles = [
        ...shoulderGirdleMuscles, ...ribsMuscles, ...erectorSpinaeMuscles,
        ...transversospinalesMuscles, ...lateralTractMuscles, ...medialTractMuscles, ...ventralDeepMuscles
    ].filter((m, index, self) => index === self.findIndex((t) => t.id === m.id)); // Удаляем дубликаты папок

    // Модифицируем пути, чтобы они вели на тест по латыни
    const latinItems = allMuscles.map(m => ({
        ...m,
        path: `/test/written?muscle=${m.id}&type=latin`
    }));

    return (
        <div className="latin-list-page">
            <h2 className="tests-page-title" style={{marginTop: '20px'}}>Тест: Латинские названия</h2>
            <ListMenu items={latinItems} />
        </div>
    );
}

export default LatinMusclesPage;