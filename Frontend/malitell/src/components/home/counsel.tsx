import { useNavigate } from "react-router-dom";
import * as s from "../../styles/home/counsel";
import worry from "../../assets/images/banner/worry.png";
import counsel from "../../assets/images/banner/counsel.png";

export default function Counsel() {
  const navigate = useNavigate();

  const handleCounselling = () => {
    if (sessionStorage.getItem("Access_Token")) {
      const url = "/counselling";
      window.open(url, "_blank", "width=1100, height=850");
    } else {
      window.alert("로그인 후 이용해 주세요.");
    }
    // const url = "/counselling";
    // window.open(url, "_blank", "width=1100, height=850");
  };

  const handleReservation = () => {
    navigate("/counselors");
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.FlexBox>
          <s.Content>
            <s.Title>상담이 필요하세요?</s.Title>
            <s.Button onClick={handleReservation}>상담예약 하기 {">"}</s.Button>
          </s.Content>
          <s.Img src={worry} alt="" />
        </s.FlexBox>
      </s.Container>
      <s.Line />
      <s.Container>
        <s.FlexBox>
          <s.Content>
            <s.Title>상담 예약 시간이 되었나요?</s.Title>
            <s.Button onClick={handleCounselling}>상담하러 가기 {">"}</s.Button>
          </s.Content>
          <s.Img src={counsel} alt="" />
        </s.FlexBox>
      </s.Container>
    </s.Wrapper>
  );
}
