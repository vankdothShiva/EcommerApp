

/**
 * SignUp Model - Represents the structure of signup data
 */
export interface SignUpModel {
  Name: string;
  Email: string;
  Password: string;
   MobileNo: string;
  choice: 'male' | 'female' | 'other'; // Union type for gender
}

/**
 * SignUp Response Model - API response after successful registration
 */
export interface SignUpResponse {
  success: boolean;
  user: {
    id: number;
    Name: string;
    Email: string;
  };
  message: string;
}

/**
 * Initial values for signup form
 */
export const SIGNUP_INITIAL_VALUES: SignUpModel = {
  Name: '',
  Email: '',
  Password: '',
  MobileNo: '',
  choice: 'male' // default value
};