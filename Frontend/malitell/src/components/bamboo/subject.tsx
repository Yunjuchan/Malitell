import { useEffect, useState } from 'react';
import {Wrapper} from '../../styles/bamboo/subject';

export default function Subject() {
  const [subject, setSubject] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080//mindLetGo/updateTopic`, {
      method: "GET"
    }).then((res) => {
      console.log(res);
    })
  })
  return (
    <Wrapper>
      주제를 입력해 주세용
    </Wrapper>
  )
}
