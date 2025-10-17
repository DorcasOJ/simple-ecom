export type TextInputProps = {
  form: any;
  type: string;
  placeholder: string;
  name: string;
  icon: "mail" | "address" | "user";
  required?: boolean;
  minLength?: boolean;
  minChar?: number;
  // onlyDigit?: boolean;
  maxLength?: boolean;
  maxChar?: number;
  textColor: string;
  bgColor: string;
};

export type TextInputBoxType = {
  form: any;
  placeholder: string;
  fieldName: string;
  type?: string;
  icon?: "mail" | "address" | "user" | "phone" | null;
  required?: boolean;
  minLength?: boolean;
  minChar?: number;
  onlyDigit?: boolean;
  maxLength?: boolean;
  maxChar?: number;
  textColor: string;
  keyboardType: string;
  secureTextEntry: boolean;
  bgColor: string;
};

export type PhoneInputBoxType = {
  form: any;
  // defaultCode?: string;
};
