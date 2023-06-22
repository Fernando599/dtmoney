import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <a href="#">
          <img src={Logo} alt="dt money" />
        </a>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
