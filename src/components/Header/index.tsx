import Logo from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <a href="#">
          <img src={Logo} alt="dt money" />
        </a>
        <button>Nova transação</button>
      </Content>
    </Container>
  );
};
