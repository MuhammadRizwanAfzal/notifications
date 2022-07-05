import validator from 'validator';
import { ERRORS } from '../errors';

export function isValidPassword (password) {
    // Required Check
    if (!password) {
        return ERRORS.password.required;
    }

    // Length check
    if (!validator.isLength(password, { min: 8, max: 150 })) {
        return ERRORS.password.length;
    }

    return '';
}

export function isPasswordMatch (password, confirmPassword) {
    if (!(password === confirmPassword)) {
        return ERRORS.password.mismatch;
    }

    return '';
}
