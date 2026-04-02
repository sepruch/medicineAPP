import ListMenu from '../components/ListMenu';
import { ventralDeepMuscles } from '../data/muscleGroups';

export default function VentralDeepMusclesPage() {
    return <ListMenu items={ventralDeepMuscles} />;
}