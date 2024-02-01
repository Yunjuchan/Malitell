import styled from "styled-components";
import { useForm } from "react-hook-form";

interface LobbyProps {
  setRoom: React.Dispatch<React.SetStateAction<number>>;
}

const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  margin: 2% auto;
  text-align: center;
  background-color: white;
`;

export default function Create({setRoom}: LobbyProps) {
  interface FormData {
    title: string;
  }

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({});

  const onSubmit = (data: FormData) => {
    console.log("데이터: ", data);

    // api연결 추가
  };

  // 필요한 추가 작업
  // 1. 방 생성 후 get요청으로 생성된 방 번호 받아와야됨
  // 2. 방 번호 받아준 뒤 설정 해줘야됨(설정시 자동으로 방 입장) 
  // 방 번호 설정 방법
  // onSubmit 에서 api로 방 생성요청 및 get으로 방 번호 받아온 뒤
  // .then에 setRoom(방번호)
  
  return (
    <Wrapper>
      <h1>방 생성하기</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">방 제목: </label>
        <input
          {...register("title", { required: "방제목 입력" })}
          id="title"
          placeholder="방 제목"
        />
        <input type="submit" />
      </form>
    </Wrapper>
  );
}
