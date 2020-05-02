import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  color: mediumseagreen;
  font-size: 30px;
  flex: 1;
  margin: 0 auto;
  text-align: center;
  white-space: pre-line;
  width: 60%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RefreshButton = styled.button`
  background-color: transparent;
  color: ${shade(0.4, 'mediumseagreen')};
  outline: 0;
  border: 0;
  padding: 10px;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: rotate(180deg);
  }
`;
