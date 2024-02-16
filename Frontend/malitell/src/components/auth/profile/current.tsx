import { useSelector } from "react-redux"
import styled from "styled-components"
import { RootState } from "../../../store/store"

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
  const profile = useSelector((state: RootState) => state.profile)
  return (
    <Wrapper>
    {profile.menuKo}
    </Wrapper>
  )
}
