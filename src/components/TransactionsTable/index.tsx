import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {

useEffect(() => {
  api.get('transactions')
    .then(response => console.log(response.data));
}, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td  className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>28/09/22</td>
          </tr>  
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">- R$500</td>
            <td>Curso</td>
            <td>08/09/22</td>
          </tr>  
        </tbody>
      </table>
    </Container>
  )
}