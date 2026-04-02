import ListMenu from '../components/ListMenu';
import { medialTractMuscles } from '../data/muscleGroups';

export default function MedialTractPage() {
    return <ListMenu items={medialTractMuscles} />;
}