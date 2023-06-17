import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api
      .get("http://localhost:3000/api/transactions")
      .then((response) => console.log(response.data));
  }, []);

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td className="deposito">R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2021</td>
            </tr>
            <tr>
              <td>Hamburguer</td>
              <td className="retirada">- R$ 59,00</td>
              <td>Alimentação</td>
              <td>10/04/2021</td>
            </tr>
            <tr>
              <td>Aluguel do apartamento</td>
              <td className="retirada">- R$ 1.200,00</td>
              <td>Casa</td>
              <td>27/03/2021</td>
            </tr>
            <tr>
              <td>Computador</td>
              <td className="deposito">R$ 5.400,00</td>
              <td>Venda</td>
              <td>15/03/2021</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
