import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  /* ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GRAY_1};
  `}; */
  flex: 1;
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
  `};
  align-items: center;
  justify-content: justify;

  border-radius: 4px;
  margin-right: 12px;
  
  min-height: 56px;
  max-height: 56px;

  flex-direction: row;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-left: 15px;
  flex: 19;
`

export const BulletIndicator = styled(View)`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  margin-right: 15px;
  background-color: ${({ theme, type }) => type ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  flex: 1;
`