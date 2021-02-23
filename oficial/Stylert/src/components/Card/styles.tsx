import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  height: 72px;
  padding: 14px;
  margin: 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['neutral-100']};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const fontVariant = css`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 24px;
  color: ${({ theme }) => theme.colors['neutral-700']};
`;

export const Label = styled.Text`
  ${fontVariant};
`;

export const Description = styled.Text`
  ${fontVariant};
  color: ${({ color, theme }) => theme.colors[color]};
  ${({ strikeThrough, theme, color }) =>
    strikeThrough &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.colors[color]};
    `};
`;
