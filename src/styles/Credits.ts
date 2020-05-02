import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 10px 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    color: #444;

    a {
      color: #444;
      text-decoration: none;
      transition: ease 0.2s;

      &:hover {
        color: mediumseagreen;
      }
    }
  }
`;
