import { useForm } from "react-hook-form";
import * as s from "../../styles/bamboo/modal";

interface props {
  onClick: (e: React.MouseEvent) => void;
}

export default function Modal({ onClick }: props) {
  interface FormData {
    content: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({});

  const onSubmit = (data: FormData) => {
    fetch(`http://localhost:8080/api/mindLetGo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access_Token": `${sessionStorage.getItem("Access_Token")}`,
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  return (
    <s.Wrapper>
      <s.ToolBox>
        <span onClick={onClick}>x</span>
      </s.ToolBox>
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <s.Input
          {...register("content", { required: "내용을 입력해 주세요." })}
          placeholder="메시지를 작성해 주세요."
        />
        <s.Submit type="submit" value="작성" />
      </s.Form>
    </s.Wrapper>
  );
}
