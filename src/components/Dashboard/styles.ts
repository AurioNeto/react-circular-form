import styled from 'styled-components';

export const Container = styled.div`
  width: 875px;
  height: 800px;
  background: var(--dashboard);
  border-radius: 1rem;
  color: var(--white);
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  button {
    font-size: 1rem;
    background: var(--grey);
    color: var(--green-light);
    border: 0;
    border-radius: 1rem;
    width: 150px;
    height: 75px;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Header = styled.header`
  max-width: 550px;
  height: 15rem;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  padding: 1rem 1rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const ButtonBox = styled.div`
  width: 550px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    background: var(--grey);
    color: var(--text);
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