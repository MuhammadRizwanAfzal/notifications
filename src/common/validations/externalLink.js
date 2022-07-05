import validator from "validator";
import { ERRORS } from "../errors";

export function isValidExternalLink(link) {
  // Required Check
  if (!link) {
    return ERRORS.externalLink.required;
  }

  // Length check
  if (!validator.isLength(link, { max: 1000 })) {
    return ERRORS.externalLink.length;
  }

  // Pattern Check
  if (!validator.isURL(link)) {
    return ERRORS.externalLink.pattern;
  }

  return "";
}
