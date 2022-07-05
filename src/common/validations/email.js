import validator from 'validator';
import { ERRORS } from '../errors';

export function isValidEmail (email) {
    // Required Check
    if (!email) {
        return ERRORS.email.required;
    }

    // Pattern Check
    if (!validator.isEmail(email)) {
        return ERRORS.email.pattern;
    }

    // Length check
    if (!validator.isLength(email, { min: 8, max: 150 })) {
        return ERRORS.email.length;
    }

    return '';
}
