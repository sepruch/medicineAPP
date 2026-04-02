import ListMenu from '../components/ListMenu';
import { lateralTractMuscles } from '../data/muscleGroups';

export default function LateralTractPage() {
    return <ListMenu items={lateralTractMuscles} />;
}