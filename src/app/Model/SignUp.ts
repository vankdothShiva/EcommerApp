

/**
 * SignUp Model - Represents the structure of signup data
 */
export interface SignUpModel {
  FullName: string;
  Email: string;
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
    fullName: string;
    email: string;
  };
  message: string;
}

/**
 * Initial values for signup form
 */
export const SIGNUP_INITIAL_VALUES: SignUpModel = {
  FullName: '',
  Email: '',
  MobileNo: '',
  choice: 'male' // default value
};