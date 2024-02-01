export interface ModalStateType {
  login: boolean;
  back: boolean;
}

const initialState: ModalStateType = {
  login: false,
  back: false,
}