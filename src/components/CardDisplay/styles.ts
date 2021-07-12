import styled from 'styled-components'

export const Card = styled.div`
  width: 650px;
  height: 420px;
  border-radius: 1rem;
  background: var(--white);
  color: var(--text);
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  button {
    font-size: 1rem;
    background: var(--green-light);
    color: var(--white);
    border: 0;
    border-radius: 1rem;
    width: 200px;
    height: 60px;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const ButtonBox = styled.div`
  width: 550px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NextBtn = styled.span`
  background: transparent;
  font-size: 5rem;
  cursor: pointer;

  transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
`

export const Container = styled.div`
  width: 800px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`