import styled from "styled-components";

export const FormBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem .5rem;
  input{
    box-sizing: border-box;
    padding: .5rem 1rem;
  }
  div{
    label{
      display: block;
      margin-bottom: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    input{
      width: 100%;
    }
  }
`;
