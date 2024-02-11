import React, { useEffect, useState } from "react";
import * as g from "../../../styles/grid";
import { useParams } from "react-router-dom";
import { CounselorData } from "../counselorDetail";
import ProfileBox from "../../../components/counsel/counselorDetail/profileBox";
import { fetchCounselorDetail } from "../../../store/counsel/counselSlice";
import ButtonBox from "../../../components/reservation/reservationFirst/buttonBox";
import MyCalendar from "../../etc/calendar";

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
    <g.Back>
      <g.Grid>
        <g.Box $col="1/5" $row="2/6">
          <MyCalendar value={selectedDate} onValueChange={setSelectedDate} />
        </g.Box>
        <g.Box $col="5/9" $row="2/6">
          {hours.map((hour) => (
            <button
              key={hour}
              onClick={() => {
                setSelectedHour(hour);
              }}
            >
              {hour.toString().padStart(2, "0")}:00
            </button>
          ))}
        </g.Box>
        <g.Box $col="1/9" $row="6/7">
          {/* 시간 정보 확인하기 위해 일단 불러와봄 */}
          <div>
            {year}년 {month}월 {date}일 {dayOfWeek}{" "}
            {selectedHour.toString().padStart(2, "0")}:00
          </div>
          {/* 일단 api 명세서에 요청 데이터에 없길래 보류해둠 */}
          counsel tag
        </g.Box>
        <g.Box $col="1/9" $row="7/12">
          {/* 질문내용 크기 조절 필요 */}
          <textarea />
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
    </g.Back>
  );
}
