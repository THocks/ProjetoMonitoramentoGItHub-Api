import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 80px auto;
`;

export const HEADER = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin: 25px;
  }

  h1 {
    font-size: 30px;
    color: #0d2636;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: black;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BUTTON = styled(Link)`
  border: 0;
  outline: 0;
  background: transparent;
`;

export const IssuesListContainer = styled.ul`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid blueviolet;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin-top: 12px;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid blueviolet;
  }

  div {
    flex: 1;
    margin-left: 20px;

    span {
      margin-top: 10px;
      font-size: 12px;
      color: black;
      font-weight: bold;
    }
  }

  strong {
    font-size: 15px;

    a {
      text-decoration: none;
      color: black;
      transform: 0.4s;
      &:hover {
        color: red;
      }
    }
    p {
      background: #222;
      color: #fff;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 7px;
      margin-left: 10px;
    }
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    appearance: none;
    background-color: #fafbfc;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
      rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    color: #24292e;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    padding: 6px 16px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;

    &:hover {
      background-color: #f3f4f6;
      text-decoration: none;
      transition-duration: 0.1s;
    }
    &:disabled {
      background-color: #fafbfc;
      border-color: rgba(27, 31, 35, 0.15);
      color: #959da5;
    }
    &:active {
      background-color: #edeff2;
      box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
      transition: none 0s;
    }
    &:focus {
      outline: 1px transparent;
    }
    &:before {
      display: none;
    }
    &:webkit-details-marker {
      display: none;
    }
  }
`;
