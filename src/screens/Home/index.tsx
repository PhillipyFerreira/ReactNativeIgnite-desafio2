import { Container } from './styles';

import { Header } from '@components/Header';
import { GroupCard} from '@components/GroupCard';

export function Home() {
    return(
        <Container>
            <Header /> 
            <GroupCard />
            
        </Container>
    );
}