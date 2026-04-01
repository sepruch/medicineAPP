import ListMenu from '../components/ListMenu';
import { superficialSubgroups } from '../data/muscleGroups';

export default function SuperficialMusclesPage() {
    return <ListMenu items={superficialSubgroups} />;
}