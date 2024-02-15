import React from "react";
import * as s from "../../styles/counselling/Form";

interface FormProps {
  joinSession: () => void;
  sessionId: string;
  sessionIdChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Form({ joinSession, sessionId, sessionIdChangeHandler }: FormProps) {
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    joinSession();
  };

  return (
    <s.Wrapper>
      <s.Title>상담 주의사항 및 동의서</s.Title>
      <s.Content onSubmit={onSubmitHandler}>
        <s.Warnning>
          <div>
            <s.Text>
              <div>
                본 상담은 여러분의 인적사항과 상담내용에 대해 비밀을 지켜드릴
                것을 약속합니다.
              </div>
              <br /> 더불어 보다 효과적인 상담 서비스를 제공하기 위해 필요한 몇
              가지 협조 사항에 대해 여러분의 동의를 구하고자 합니다.
            </s.Text>
            <s.SubTitle color="Red">상담 주의사항</s.SubTitle>
            <s.Text>
              상담 화면의 카메라 가림 버튼은 내담자의 화면에서만 내담자의
              카메라를 끄는 것으로 상담사의 화면에서는 내담자가 카메라를 꺼도
              내담자의 모습이 보인다는 점 유의해 주시기 바랍니다. 이는 상담을 더
              효율적으로 하기 위한 조치이므로 양해 부탁드리겠습니다.
            </s.Text>
          </div>
          <div>
            <s.SubTitle color="gray">개인정보 공개 동의</s.SubTitle>
            <s.Text>
              {"(수집, 이용 목적)"}
              <br />- 수집된 상담 내용은 상담 외 다른 목적으로 사용되지
              않습니다.
            </s.Text>
            <s.Text>
              - 상담진행 과정 중 상담사의 필요에 따라 상담과정을 녹화, 녹음,
              캡쳐를 할 수 있음을 알려드립니다.
              <br />- 이를 원하지 않는 경우 미리 상담사에게 말씀해 주시기
              바랍니다.
            </s.Text>
          </div>
        </s.Warnning>
        <div style={{ textAlign: "center" }}>
          위 내용에 동의합니다.
          <input type="checkbox" required />
        </div>
        <s.InputBox>
          <s.Input
            type="text"
            value={sessionId}
            onChange={sessionIdChangeHandler}
            minLength={8}
            maxLength={20}
            required
            placeholder="상담 예약시 발급받은 입장키를 입력해주세요."
          />
          <s.Button type="submit">상담 시작</s.Button>
        </s.InputBox>
      </s.Content>
    </s.Wrapper>
  );
}

export default Form;
