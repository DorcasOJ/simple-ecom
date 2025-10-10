export type LoginForm = {
  email: string;
  password: string;
  // remember?: boolean;
};

export type ButtonProps = {
  isLoading: boolean;
  actionWord: string;
  // handleSubmit?: () => void;
  handleSubmit?: (data: LoginForm) => Promise<void>;
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
// export type CreatePasswordProps = {
//     password: string;
//     confirmPassword: string;
// }

export type CreatePasswordProps = {
  password: string;
  confirmPassword?: string;
};

export type TermInputProps = {
  form: any;
  name: string;
};

export type PasswordInputProp = {
  form: any;
  placeholder?: string;
  name?: string;
};

export type ConfirmPasswordInputProp = {
  form: any;
  placeholder?: string;
  name?: string;
  password: string;
};

export type ForgotPasswordProps = {
  email: string;
};
