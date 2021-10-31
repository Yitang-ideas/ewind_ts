export const EmailReg = /^[a-zA-Z0-9.!#$%^&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export interface RuleProp {
  type: "required" | "email" | "password";
  message: string;
}
