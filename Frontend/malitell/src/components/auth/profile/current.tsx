import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-left: 20px;
  align-items: center;
  font-size: 23px;
  font-weight: bold;
  `

export default function Current() {
  return (
    <Wrapper>
    props받아서 현재 메뉴명 표시 부탁
    </Wrapper>
  )
}
