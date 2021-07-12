import { ButtonBox, Card, Container, NextBtn } from "./styles";

export function CardDisplay () {
  return (
    <>
      <Container>
        <NextBtn>
          <p>&#60;</p>
        </NextBtn>
        <Card>
          <h1>Entidade 1</h1>
          <button>
            Ver informações
          </button>
          <ButtonBox>
            <button>
              Ver Contratos
            </button>
            <button>
              Ver Parcerias
            </button>
          </ButtonBox>

          <ButtonBox>
            <button>
              Adicionar Contrato
            </button>
            <button>
              Adicionar Parceria
            </button>
          </ButtonBox>
        </Card>
        <NextBtn>
          <p>&#62;</p>
        </NextBtn>
      </Container>
    </>
  )
}