import ListMenu from '../components/ListMenu';
import { autochthonousGroups } from '../data/muscleGroups';

export default function AutochthonousMusclesPage() {
    return <ListMenu items={autochthonousGroups} />;
}