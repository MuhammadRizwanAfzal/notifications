import validator from "validator";
import { ERRORS } from "../errors";

export function isValidPhoneNumber(phone_number) {
  // Required Check
  if (!phone_number) {
    return ERRORS.phone_number.required;
  }

  // Length check
  if (!validator.isLength(phone_number, { min: 8 })) {
    return ERRORS.phone_number.length;
  }

  return "";
}
