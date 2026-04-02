import ListMenu from '../components/ListMenu';
import { transversospinalesMuscles } from '../data/muscleGroups';

export default function TransversospinalesPage() {
    return <ListMenu items={transversospinalesMuscles} />;
}