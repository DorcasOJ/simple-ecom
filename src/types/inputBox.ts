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
};
