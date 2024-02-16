import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98%;
  height: 100%;
  padding-left: 1%;
  padding-top: 2%;
  .collapsible {
    /* transition: all 0.2ms; */
    background-color: white;
    font-weight: bold;
    font-size: 15px;
    width: 100%;
    height: 40px;
    border: none;
    justify-content: space-between;
    box-shadow: 1px 1px 1px 1px lightgray;
    cursor: pointer;
  }
  .top {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .bottom {
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
  }
  .collapsible:hover,
  .collapsible.active {
    background-color: #fbf3fd;
  }

  .content {
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #f1f1f1;
    max-height: 0;
  }

  .content.active {
    max-height: 100px;
    transition: max-height 0.2s ease-in-out;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
`;

export const Select = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 1px lightgray inset;
  background-color: #f7f7f7;
`;
