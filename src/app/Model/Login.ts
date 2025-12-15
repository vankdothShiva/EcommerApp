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


export interface LoginModelManago {
  UserName: string;
  Password: string;
}

export interface LoginResponse {
  result: {
    user: {
      id: string;
      email: string;
      name: string;
      phoneNumber: string;
    };
    token: string;
  };
  isSuccess: boolean;
  message: string;
}










