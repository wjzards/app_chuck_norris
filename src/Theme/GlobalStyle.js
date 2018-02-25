import styled, { injectGlobal } from "styled-components";
import Colors from "./Colors";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto|Lobster');
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: ${Colors.blue_gray};
  }
  label{
    padding-left: 5px;
    font-size: 14px;
  }
  hr{
    border:1px solid ${Colors.blue_gray};
    margin: 2rem auto;   
  }
  button {
    outline: none;
    cursor: pointer;
  }
  input {
    background: ${Colors.blue_gray};
    font-size: 14px;
    border: none;
    outline: none;    
    border-radius: 5px;
    &:hover{
     box-shadow: 0px 0px 5px ${Colors.blue};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    display: block;
    height: 100%;
  }
`;

export const Modal = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  box-shadow: 0px 10px 50px ${Colors.shadow};

  @media only screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;
  font-family: 'Lobster', cursive;
  color: ${Colors.white};
  padding: 2rem;
  background: linear-gradient(-45deg, #24ff72, #9a4eff);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media only screen and (max-width: 768px) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${Colors.white};

  @media only screen and (max-width: 768px) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const Message = styled.div`
  p{
    padding: 1rem;
    background: ${Colors.blue_gray};
    border-radius: 5px;
    word-wrap: break-word;
  }
`;

export const Button = styled.button`
  margin-top: 1.5rem;
  padding: 1rem 0rem;
  background: ${Colors.blue};
  border: none;
  border-radius: 5px;
  color: ${Colors.white};
  font-size: 1.2rem;
  font-weight: bold;
  
  &:hover{
    box-shadow: 0px 0px 10px ${Colors.blue};
  }

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;
