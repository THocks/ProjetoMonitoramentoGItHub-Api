import styled, { keyframes, css } from "styled-components";

export const Contaniner = styled.div`
  max-width: 700px;
  background: #6a0e6a;
  border-radius: 4px;
  box-shadow: 0 0 20px white;
  padding: 60px;
  margin: 80px auto;

  h1 {
    font-size: 19px;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: white;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${(props) => (props.error ? "#FFF000" : "#eee")};
    padding: 20x 20px;
    border-radius: 50px;
    font-size: 17px;
    height: 35px;
  }
`;

// Animation Button

const animate = keyframes`
  
  from{
    transform: rotate(0deg);
  } to{
    transform: rotate(360deg);
  }

`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #0d2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + li {
      border-top: 1px solid blueviolet;
    }

    a {
      color: #0d2636;
      text-decoration: none;
    }
    span {
      color: white;
      font-size: 18px;
      text-transform: uppercase;
      transform: 0.4s;

      &:hover {
        color: red;
      }
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: "button",
})`
  background-color: transparent;
  color: #0d2636;
  border: 0;
  padding: 8px 7px;
  outline: 0;
  border-radius: 4px;
`;
export const SpanTitle = styled.title``;
