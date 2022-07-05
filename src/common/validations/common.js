import validator from "validator";
import { ERRORS } from "../errors";

export function noSpace(text) {
  return text.replace(/\s+/g, "");
}

export function noDoubleSpace(text) {
  return text.replace(/  +/g, " ");
}

export function isLengthValid(text, min, max) {
  if (!validator.isLength(text || "", { min, max })) {
    return `Length must be >= ${min} and <= ${max}`;
  }
  return "";
}
