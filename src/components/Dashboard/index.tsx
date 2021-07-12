import { CardDisplay } from "../CardDisplay";
import { ButtonBox, Container, Header } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <h1>MUNICÍPIO: Cascavel</h1>
        <ButtonBox>
          <button>
            Ver informações
          </button>
          <button>
            Adicionar Entidades
          </button>
        </ButtonBox>
        <h2>ENTIDADES</h2>
      </Header>
      <CardDisplay />
      <button>
        ENVIAR
      </button>
    </Container>
  )
}