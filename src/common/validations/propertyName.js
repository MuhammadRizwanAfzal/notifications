import validator from 'validator';
import { ERRORS } from '../errors';

export function isValidPropertyName (name) {
    // Required Check
    if (!name) {
        return ERRORS.propertyName.required;
    }

    // Length check
    if (!validator.isLength(name, { min: 3, max: 150 })) {
        return ERRORS.propertyName.length;
    }

    return '';
}
