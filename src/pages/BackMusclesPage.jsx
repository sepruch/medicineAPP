import ListMenu from '../components/ListMenu';
import { mainBackGroups } from '../data/muscleGroups';

function BackMusclesPage() {
    // Возвращаем ТОЛЬКО компонент. Он сам отрисует всю красоту.
    return <ListMenu items={mainBackGroups} />;
}

export default BackMusclesPage;