import React, { useState } from 'react'
import { StyledCalendarWrapper } from '../../styles/etc/calendar'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
  const [value, setDate] = useState<Value>(new Date());
  const handleDateChange = (newDate: Value) => {
    setDate(newDate);
  };
  return (
    <StyledCalendarWrapper>
        <Calendar
          locale="ko"
          calendarType="US"
          formatDay={(date) => moment(date).format("D")} // 일 제거 숫자만 보이게
          formatYear={(date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
          formatMonthYear={(date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
          onChange={handleDateChange}
          value={value}
        />
      </StyledCalendarWrapper>
  )
}
