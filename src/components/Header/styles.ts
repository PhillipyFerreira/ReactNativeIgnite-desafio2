import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 98px;
  height: 37px;
  max-width: 98px;
  max-height: 37px;
  flex: 1;
  margin-right: 60%;
`;

export const LogoUser = styled.Image`
  width: 40px;
  height: 40px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.GREEN_DARK
}))``;