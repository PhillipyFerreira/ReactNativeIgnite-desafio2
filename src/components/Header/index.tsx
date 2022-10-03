import { useNavigation } from "@react-navigation/native";

import { BackButton, BackIcon, Container, Logo, LogoUser, HeaderThemeProps } from "./styles";

import logoImg from '@assets/logo.png';
import logoUser from '@assets/userLogo.png';

type Props = {
  type?: HeaderThemeProps;
  showBackButton?: boolean;
}

export function Header({ showBackButton = false, type = 'GREEN_THEME' }: Props) {

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