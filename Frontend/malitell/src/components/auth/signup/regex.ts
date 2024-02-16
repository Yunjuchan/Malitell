export const idRegex = /^[a-z0-9]{8,20}$/;
export const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()])[\da-zA-Z!@#]{8,16}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const nameRegex = /^[ㄱ-ㅎ가-힣]{2,30}$/;
export const genderRegex = /^(M|F)$/;
export const nicknameRegex = /^[가-힣]{2,10}$/;
export const birthdayRegex =
  /^(19[0-9]{2}|20[0-1][0-9]|2020|2021|2022|2023|2024)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
export const phoneRegex = /^(010[0-9]{8})$/;
export const careerRegex = /^([1-9]{1}[0-9]{1}|[0-9]{1})$/;
