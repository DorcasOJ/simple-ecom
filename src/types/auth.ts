export type LoginForm = {
  email: string;
  password: string;
  // remember?: boolean;
};

export type ForgotPasswordProps = {
  email: string;
};

export type SignupForm = {
  firstName: string;
  lastName: string;
  phone: string;
  referalCode?: string;
  email: string;
  password: string;
  terms?: boolean;
  confirmPassword?: string;
};

export type CreatePassword = {
  password: string;
  confirmPassword?: string;
};

export type ButtonProps = {
  isLoading: boolean;
  actionWord: string;
  handleOnclick?: () => void;
};
