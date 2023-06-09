import { Container } from "./style";
import entradas from "../../assets/Entradas.svg";
import saidas from "../../assets/Saídas.svg";
import total from "../../assets/Total.svg";

export function Summary() {
  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradas} alt="Entradas" />
          </header>
          <strong>R$ 17.400,00</strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={saidas} alt="Saidas" />
          </header>
          <strong>R$ 1.259,00</strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={total} alt="Total" />
          </header>
          <strong>R$ 16.141,00</strong>
        </div>
      </Container>
    </>
  );
}
