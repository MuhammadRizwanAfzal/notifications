import { object } from 'yup';
import {
  firstName, lastName, phoneNumber, email, password, confirmPassword, url, title,
} from '../../../../common/validations/validator';

const schema = object().shape({
  first_name: firstName().label('First Name'),
  last_name: lastName().label('Last Name'),
  phone_number: phoneNumber().label('Phone Number'),
  email: email().label('Email Address'),
  password: password().label('Password'),
  confirm_password: confirmPassword().label('Confirm Password'),
  url: url().label('External Link'),
  company_name: title().label('Title'),
});

export default schema;
