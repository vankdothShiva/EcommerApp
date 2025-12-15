export interface LoginModel {
  UserName: string;
  UserPassword: string;
  rememberMe: boolean;
}


export interface LoginResponse {
  token: string;
  user: {
    id: number;
    UserName: string;
    email: string;
  };
  message: string;
}



export const LOGIN_INITIAL_VALUES: LoginModel = {
  UserName: '',
  UserPassword: '',
  rememberMe: false
};







