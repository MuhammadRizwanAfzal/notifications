import { string, number, ref, array } from "yup";

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const whatsAppExp =
  /^$|^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const nonEmpty = /^\S+$/;

export const message = () => {
  return string().max(2500).trim().required();
};

export const price = () => {
  return number().min(1);
};

export const subject = () => {
  return string().max(2500).trim().required();
};

export const firstName = () => {
  return string().trim().required().min(3).max(50);
};

export const lastName = () => {
  return string().trim().required().min(3).max(50);
};

export const streetAddress1 = () => {
  return string().trim().required().max(150);
};

export const streetAddress2 = () => {
  return string().trim().max(150);
};

export const city = () => {
  return string().max(30).trim();
};

export const userName = () => {
  return string()
    .trim()
    .required()
    .min(3)
    .max(50)
    .matches(nonEmpty, "Spaces are not allowed");
};

export const title = () => {
  return string().trim().required().min(3).max(50);
};

export const url = () => {
  return string().url().trim().required().min(5).max(1000);
};

export const location = () => {
  return string();
};

export const socialLink = () => {
  return string().url().trim().max(1000);
};

export const phoneNumber = () => {
  return string()
    .required()
    .max(15)
    .matches(phoneRegExp, "Please provide valid Phone no");
};

export const whatsApp = () => {
  return string()
    .max(30)
    .matches(whatsAppExp, "Please provide valid WhatsApp number");
};

export const email = () => {
  return string().trim().required().email().min(3).max(100);
};
export const rank_order = () => {
  return number().min(1).max(4);
};

export const password = () => {
  return string()
    .min(8, "Password must be atleast 8 characters")
    .max(16, "Password can not be more than 16 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    );
};

export const confirmPassword = () => {
  return string()
    .required("Confirm Password is required")
    .oneOf([ref("password"), null], "Confirm password must match Password");
};

export const profileConfirmPassword = () => {
  return string()
    .required("Confirm Password is required")
    .oneOf([ref("new_password"), null], "Confirm password must match Password");
};

export const reviewDescription = () => {
  return string().required().min(3).max(250).trim();
};

export const rating = () => {
  return number().required();
};

export const travelBusiness = () => {
  return number().required();
};

export const bio = () => {
  return string().trim().required().min(200).max(500);
};

export const link = () => {
  return string().trim().url().required().min(5).max(5000);
};
export const collection_url = () => {
  return string().trim().url().max(5000);
};

export const zip = () => {
  return string().trim().max(30);
};

// We need to separate it out later

export const property = {
  external_link: string()
    .url()
    .required()
    .min(5)
    .max(1000)
    .trim()
    .label("External Link"),

  user: number().required().label("Owner"),
  name: string().trim().required().min(3).max(50).label("Property Name"),

  address: string().max(150).trim().label("Street Address"),

  country: string().max(30).trim().label("Country"),

  state: string().max(30).trim().label("State"),

  city: string().max(30).trim().label("City"),

  zip: string().max(30).trim().label("Zip code"),

  lat: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(-90, "Please provide valid Latitude")
    .max(90, "Please provide valid Latitude")
    .label("Latitude"),

  lng: number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(-180, "Please provide valid Longitude")
    .max(180, "Please provide valid Longitude")
    .label("Longitude"),

  headline: string().max(100).trim().label("Headline"),
  what_we_love_about_place: string().max(150).trim().label("Place love"),
  description: string().max(250).trim().label("Description"),
};

export const companyInfo = {
  address1: string().max(150).trim().label("Street Address 01"),
  address2: string().max(150).trim().label("Street Address 02"),
  country: string().max(30).trim().label("Country"),
  state_name: string().max(30).trim().label("State"),
  city_name: string().max(30).trim().label("City"),
  zipcode: string().max(30).trim().label("Zip Code"),
};

export const contactInfo = {
  first_name: string().required().min(3).max(50).trim().label("First Name"),

  last_name: string().required().min(3).max(50).trim().label("Last Name"),

  title: string().required().min(3).max(50).trim().label("Title"),

  email: string().required().email().min(3).max(100).trim().label("Email"),

  contact_phone: string()
    .required()
    .max(30)
    .matches(phoneRegExp, "Please provide valid Phone no")
    .label("Phone no"),
};

export const expertIntro = () => {
  return string().trim().max(350);
};

export const purchaseMessage = () => {
  return string().trim().max(350);
};

export const expertImgsDescription = () => {
  return string().trim().max(350);
};

export const tip = () => {
  return string().trim().required().min(3).max(100);
};

export const description = () => {
  return string().trim().required().min(3).max(250);
};

export const soLocalUnitDescription = () => {
  return string().trim().required().min(3).max(500);
};

export const discountNote = () => {
  return string().trim().max(250);
};

export const filters = () => {
  return array().required();
};

export const cost = () => {
  return string().required();
};

export const soLocalCategory = () => {
  return number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required();
};

export const lat = () => {
  return number()
    .required()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(-90, "Please provide valid Latitude")
    .max(90, "Please provide valid Latitude")
    .label("Latitude");
};

export const lng = () => {
  return number()
    .required()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(-180, "Please provide valid Longitude")
    .max(180, "Please provide valid Longitude")
    .label("Longitude");
};

export const id_destination = () => {
  return number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required();
};
