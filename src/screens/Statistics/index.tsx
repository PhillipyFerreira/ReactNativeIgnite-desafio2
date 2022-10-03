import {FlatList, Text} from 'react-native';

import { Container, HeaderList } from './styles';

import { Header } from '@components/Header';
import { GroupCard} from '@components/GroupCard';
import { Button } from '@components/Button';
import { DietList, DietElement} from'@components/DietList'; 

const dataTest = [{
        name: "Tela de estatistica",
        description: "Teste descripton",
        date: "Teste de data",
        hour: "20:00",
        acceptInDiet: true
    },
    {
        name: "Teste name 2",
        description: "Teste descripton 2",
        date: "Teste de data 2",
        hour: "16:00",
        acceptInDiet: false
    }];
export function Statistics() {
    return(
        <Container>
            <Header/> 
            <GroupCard />
            <Text> Refeições </Text>
            <Button title='+  Nova refeição'/>

            <HeaderList>
                <FlatList style={{flex: 1}}
                    data={dataTest}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <DietList element={item}></DietList>
                        // title={item}
                        // isActive={item === team}
                        // onPress={() => setTeam(item)}
                        // />
                    )}
                />
            </HeaderList>
            
        </Container>
    );
}