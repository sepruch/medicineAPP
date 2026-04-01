import ListMenu from '../components/ListMenu';
import { ribsMuscles } from '../data/muscleGroups';

export default function RibsGirdleMusclesPage() {
    return <ListMenu items={ribsMuscles} />;
}