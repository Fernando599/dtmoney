import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border: 1px solid #d7d7d7;
    border-radius: 5px;
    background: #e7e9ee;
    outline: none;

    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 1.25rem;
    margin-top: 1.5rem;
    font-size: 1rem;
    background: var(--green);
    border: none;
    color: white;
    font-weight: 600;
    border-radius: 5px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border: 1px solid #d7d7d7;
  border-radius: 0.3125rem;

  background: ${(props) => (props.isActive ? "#12A454" : "transparent")};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  span {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
