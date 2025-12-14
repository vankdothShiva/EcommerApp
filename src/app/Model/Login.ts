export interface LoginModel {
  username: string;
  password: string;
  rememberMe: boolean;
}


export interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  message: string;
}



export const LOGIN_INITIAL_VALUES: LoginModel = {
  username: '',
  password: '',
  rememberMe: false
};







