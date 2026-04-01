import ListMenu from '../components/ListMenu';
import { deepSubgroups } from '../data/muscleGroups';

export default function DeepMusclesPage() {
    return <ListMenu items={deepSubgroups} />;
}