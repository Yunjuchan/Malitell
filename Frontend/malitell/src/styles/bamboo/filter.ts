import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: end;
  [type="checkbox"]::before {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transform: scale(0.8);
    background-color: #bf94e4;
    transition: left 250ms linear;
  }

  [type="checkbox"]:checked {
    background-color: #bf94e4;
    border-color: white;
  }
  
  [type="checkbox"]:checked::before {
    background-color: white;
    left: 16px;
  }

  [type="checkbox"]:focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) solid lightgray;
  }

  [type="checkbox"]:enabled:hover {
    box-shadow: 0 0 0 max(4px, 0.2em) lightgray;
  }
`;

export const Label = styled.label`
display: flex;
justify-content: center;
align-items: center;
`

export const Toggle = styled.input`
  appearance: none;
  position: relative;
  z-index: 0;
  border: 3px solid #bf94e4;
  border-radius: 20px;
  width: 40px;
  height: 24px;
  margin-right: 10px;
  box-shadow: 1px 1px 1px 1px lightgray;
`;
