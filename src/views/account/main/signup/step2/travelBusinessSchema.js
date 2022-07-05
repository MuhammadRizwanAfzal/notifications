import { object } from "yup";
import {
  password,
  confirmPassword,
} from "../../../../../common/validations/validator";

const schema = object().shape({
  password: password().label("Password"),
  confirmPassword: confirmPassword(),
});

export default schema;
