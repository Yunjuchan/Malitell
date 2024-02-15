import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  position: relative;
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    padding: 3% 5%;
    background-color: white;
  }
  .react-calendar__navigation {
    justify-content: center;
  }
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }
`;
// 캘린더를 불러옴
export const StyledCalendar = styled(Calendar)``;
