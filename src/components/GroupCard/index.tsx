import { TouchableOpacityProps, View } from "react-native";
import { Container, SubContainer, Icon, Title, SubTitle } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subTitle?: string;
}

export function GroupCard({ title='90,90%', subTitle='Texto aleatorio para teste', ...rest }: Props) {
  return (
    <Container {...rest}>
      <SubContainer>
        <Title>
          {title}
        </Title>
        <SubTitle>
          {subTitle}
        </SubTitle>
      </SubContainer>
      <Icon />
    </Container>
  )
}