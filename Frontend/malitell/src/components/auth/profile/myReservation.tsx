import { useEffect, useState } from "react";
import * as s from "../../../styles/auth/profile/myReservation";
import { fetchReservations } from "../../../store/auth/profileSlice";

export interface ReservationData {
  counselingDate: string;
  name: string;
}

export default function MyReservation() {
  const [reservations, setReservations] = useState<ReservationData[]>();
  const convertToLocalDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}년 ${month}월 ${day}일 ${hours}:${minutes}`;
  };

  useEffect(() => {
    fetchReservations().then((res) => setReservations(res));
  }, []);
  return (
    <s.Wrapper>
      {reservations && reservations.length > 0 ? (
        <>
          {reservations
            .slice()
            .sort(
              (a, b) =>
                Date.parse(b.counselingDate) - Date.parse(a.counselingDate)
            )
            .map((reservation, index) => (
              <s.Box key={index}>
                {convertToLocalDateTime(reservation.counselingDate)}{" "}
                {reservation.name}
              </s.Box>
            ))}
        </>
      ) : (
        <>
          <div>
            아직 상담 예약을 하지 않았군요? 상담이 필요하다면 원하시는
            상담가분과 상담은 어때요?
          </div>
        </>
      )}
    </s.Wrapper>
  );
}
