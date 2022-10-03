import { TouchableOpacityProps } from 'react-native';

import { Container, Title, BulletIndicator} from './styles';

export type DietElement = {
  name: string;
  description: string;
  date: string;
  hour: string;
  acceptInDiet: boolean;
}

export type ListDietElement = {
  date: string;
  eventList: DietElement[];
}

type Props = TouchableOpacityProps & {
  element: DietElement
}

export function DietList({ element, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>
      {element.hour}  |  {element.name}
      </Title>
      <BulletIndicator type={element.acceptInDiet}/>
    </Container>
  );
}