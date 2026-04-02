import ListMenu from '../components/ListMenu';
import { erectorSpinaeMuscles } from '../data/muscleGroups';

export default function ErectorSpinaePage() {
    return <ListMenu items={erectorSpinaeMuscles} />;
}