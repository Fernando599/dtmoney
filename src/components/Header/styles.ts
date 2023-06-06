import { styled } from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  height: 13.25rem;
`;

export const Content = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 2rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: none;
    border-radius: 5px;
    padding: 0.75rem 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  a {
    display: flex;
  }
`;
