import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    height: 8.5rem;
    width: 22rem;
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 0.875rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.375rem;
      display: block;
    }

    &.highlight-background {
      background-color: var(--green);
      color: white;
    }
  }
`;
