import { useEffect } from "react";
import { Container } from "./style";

export function TransactionsTable() {

useEffect(() => {
  fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data));
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