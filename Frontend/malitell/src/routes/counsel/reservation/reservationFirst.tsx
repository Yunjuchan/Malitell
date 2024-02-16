import React, { useEffect, useState } from "react";
import * as g from "../../../styles/grid";
import { useParams } from "react-router-dom";
import { CounselorData } from "../counselorDetail";
import ProfileBox from "../../../components/counsel/counselorDetail/profileBox";
import { fetchCounselorDetail } from "../../../store/counsel/counselSlice";
import ButtonBox from "../../../components/reservation/reservationFirst/buttonBox";
import MyCalendar from "../../etc/calendar";
import styled from "styled-components";

const TimeBox = styled.div`
  width: 300px;
  height: 290px;
  border-radius: 8px;
  padding: 5px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;

const Button = styled.button`
  width: 55px;
  height: 35px;
  background-color: #fbf3fd;
  border: none;
  border-radius: 10px;
  &.focus {
    background-color: #bf94e4;
    color: white;
    font-weight: bold;
  }
`;

const ResultText = styled.div`
  width: 650px;
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
  color: #bf94e4;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: start;
`

const ResultBox = styled.div`
  width: 650px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`

const Question = styled.textarea`
  width: 630px;
  height: 180px;
  padding: 10px;
  margin: auto;
  border: none;
  resize: none;
  background-color: white;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
`;

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const hours = Array.from({ length: 24 }, (value, index) => index);

export interface ReservationData {
  year: number;
  month: number;
  date: number;
  dayOfWeek: string;
  selectedDate: Value;
  selectedHour: number;
  counselingDate: number | number[];
}

export default function ReservationFirst() {
  const { counselorSeq } = useParams();
  const [counselor, setCounselor] = useState<CounselorData>();

  const current = new Date();
  current.setHours(0, 0, 0, 0);
  const [selectedDate, setSelectedDate] = useState<Value>(current);
  const [selectedHour, setSelectedHour] = useState<number>(0);

  let counselingDate: number | number[] = [];
  if (selectedDate instanceof Date) {
    counselingDate = selectedDate.getTime() + selectedHour * 3600 * 1000;
  } else if (Array.isArray(selectedDate)) {
    counselingDate = selectedDate.map((date) =>
      date ? date.getTime() + selectedHour * 3600 * 1000 : 0
    );
  }

  let year = 0;
  let month = 0;
  let date = 0;
  let dayOfWeek = "";

  if (selectedDate instanceof Date) {
    year = selectedDate.getFullYear();
    month = selectedDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    date = selectedDate.getDate();
    const day = selectedDate.getDay(); // 요일을 구합니다. 0은 일요일, 1은 월요일, ..., 6은 토요일입니다.
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    dayOfWeek = days[day] + "요일"; // 요일에 '요일'을 붙여줍니다.
  }

  const fetchData = () => {
    fetchCounselorDetail(Number(counselorSeq)).then((res) => {
      setCounselor(res);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <g.Back />
      <g.Grid>
        <g.Box $col="1/5" $row="2/6">
          <MyCalendar value={selectedDate} onValueChange={setSelectedDate} />
          <ResultText>선택 시간</ResultText>
        </g.Box>
        <g.Box $col="5/9" $row="2/6">
          <TimeBox>
            {hours.map((hour) => (
              <Button
                key={hour}
                onClick={() => {
                  setSelectedHour(hour);
                }}
                className={hour === selectedHour ? "focus" : ""}
              >
                {hour.toString().padStart(2, "0")}:00
              </Button>
            ))}
          </TimeBox>
        </g.Box>
        <g.Box $col="1/9" $row="6/7">
          <ResultBox>
            {year}년 {month}월 {date}일 {dayOfWeek}{" "}
            {selectedHour.toString().padStart(2, "0")}:00
          </ResultBox>
        </g.Box>
        <g.Box $col="1/9" $row="7/12">
          <Question placeholder="상담진행 또는 기타 질문들을 입력해주세요." />
          {/* 질문내용 크기 조절 필요 */}
        </g.Box>
        {counselor && (
          <>
            <g.Box $col="9/13" $row="2/7">
              <ProfileBox counselor={counselor} />
            </g.Box>
            <g.Box $col="9/13" $row="7/10">
              <ButtonBox
                counselorSeq={Number(counselorSeq)}
                reservationData={{
                  year,
                  month,
                  date,
                  dayOfWeek,
                  selectedDate,
                  selectedHour,
                  counselingDate,
                }}
              />
            </g.Box>
          </>
        )}
      </g.Grid>
    </>
  );
}
