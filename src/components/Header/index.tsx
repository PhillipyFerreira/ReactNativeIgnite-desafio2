import { useNavigation } from "@react-navigation/native";

import { BackButton, BackIcon, Container, Logo, LogoUser } from "./styles";

import logoImg from '@assets/logo.png';
import logoUser from '@assets/userLogo.png';

export type ButtonTypeStyleProps = 'GREEN_THEME' | 'RED_THEME';

type Props = {
  type: ButtonTypeStyleProps;
  showBackButton?: boolean;
}

export function Header({ showBackButton = false, type = 'RED_THEME' }: Props) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return ( showBackButton ?
            <Container>
              <BackButton onPress={handleGoBack}>
                <BackIcon />
              </BackButton>
            </Container>
          :
            <Container>
                  <Logo source={logoImg} />
                  <LogoUser source={logoUser}/>
            </Container>
  )
}