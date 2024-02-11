import { useEffect, useState } from "react";
import * as s from "../../../styles/auth/profile/myReservation";
import { fetchReservations } from "../../../store/auth/profileSlice";

export interface ReservationData {
  counselingDate: string;
  name: string;
}

export default function MyReservation() {
  const [reservations, setReservations] = useState<ReservationData[]>();
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
              <div key={index}>
                {reservation.counselingDate} {reservation.name}
              </div>
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
