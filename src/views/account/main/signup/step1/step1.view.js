// @flow
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import PhoneTextField from "../../../../../common/components/phone-textfield";
import CustomTextField from "../../../../../common/components/textfield/Textfield.view";
import CustomButton from "../../../../../common/components/button/Button";
import PropertyIcon from "../../../../../common/icons/propety.icon";
import EmailIcon from "../../../../../common/icons/email.icon";
import LinkIcon from "../../../../../common/icons/link.icon";
import { isValidEmail } from "../../../../../common/validations/email";
import { isValidPhoneNumber } from "../../../../../common/validations/phone";
import { isValidPropertyName } from "../../../../../common/validations/propertyName";
import { isValidExternalLink } from "../../../../../common/validations/externalLink";
import {
  noSpace,
  noDoubleSpace,
} from "../../../../../common/validations/common";
import { tbListProperty } from "../../../../../common/actions/auth";

const Step1 = (props) => {
  const theme = useTheme();
  const { setStepNo, setMobileFormType, step1Handler } = props;

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // keeping state of the step 01 form
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    externalLink: "",
    phone_number: "",
  });

  const [formErrors, setformErrors] = useState({
    name: "",
    email: "",
    externalLink: "",
    phone_number: "",
  });

  // Form Change Handler
  const handleChange = (evt, type) => {
    let value = evt.target.value;
    if (type === "PROPERTY_NAME") {
      value = noDoubleSpace(value);
    }

    if (type === "EMAIL" || type === "EXTERNAL_LINK") {
      value = noSpace(value);
    }

    setFormState({
      ...formState,
      [evt.target.name]: value,
    });
  };

  const handlePhoneChange = (v) => {
    if (v?.length > 15) {
      return;
    } else {
      setFormState({
        ...formState,
        phone_number: v,
      });
    }
  };

  // Validate Step 01
  const validate = () => {
    const { name, email, externalLink, phone_number } = formState;
    const errors = {};

    // Property Name
    errors.name = isValidPropertyName(name);

    // Email Validation
    errors.email = isValidEmail(email);

    // External Link Validation
    errors.externalLink = isValidExternalLink(externalLink);

    //Phone Number validation
    errors.phone_number = isValidPhoneNumber(phone_number);

    setformErrors({
      name: errors.name,
      email: errors.email,
      externalLink: errors.externalLink,
      phone_number: errors.phone_number,
    });

    if (
      !errors.name &&
      !errors.email &&
      !errors.externalLink &&
      !errors.phone_number
    ) {
      return true;
    }
    return false;
  };

  // Step 01 Next Button Handler'
  const submitHandler = async () => {
    // validate on client-side
    const isValid = validate();

    // complete form validation
    if (isValid) {
      setIsLoading(true);
      const name = formState.name.trim();
      const email = formState.email.trim();
      const externalLink = formState.externalLink.trim();
      const phone_number = formState.phone_number.trim();

      // validate from server
      const request = {
        name,
        email,
        externalLink,
        phone_number,
      };

      tbListProperty(
        request,
        () => {
          setIsLoading(false);
          step1Handler({
            name,
            email,
            external_link: externalLink,
            phone_number,
          });
          setStepNo(2);
        },
        (err) => {
          setIsLoading(false);
          setformErrors({
            name: err?.response?.data?.errMsgs?.name,
            email: err?.response?.data?.errMsgs?.email,
            externalLink: err?.response?.data?.errMsgs?.external_link,
            phone_number: err?.response?.data?.errMsgs?.phone_number,
          });
        }
      );
    }
  };

  return (
    <div className="formBox cnt">
      <div className="titleSection">
        <Typography
          variant="body1"
          style={{ color: theme.palette.typography.darkOrange }}
        >
          We know you will love us….so here is your FREE TRIAL
        </Typography>
        <Typography variant="h3" className="subHeading">
          No strings, no credit card required, no hidden anything.
        </Typography>

        <Typography variant="h2" className="mainHeading">
          List your property
        </Typography>
      </div>

      {/* Property Name */}
      <CustomTextField
        placeholder="Property Name"
        id="property_name"
        name="name"
        value={formState.name}
        error={formErrors.name}
        onChange={(e) => handleChange(e, "PROPERTY_NAME")}
        startAdornment={
          <PropertyIcon
            viewBox="0 0 512 512"
            color={theme.palette.icon.mediumGray}
          />
        }
        customClasses={{
          inputAdornedStart: "inputAdornedStartItem",
        }}
      />

      {/* Email */}
      <CustomTextField
        placeholder="Email"
        id="email"
        name="email"
        value={formState.email}
        onChange={(e) => handleChange(e, "EMAIL")}
        error={formErrors.email}
        startAdornment={
          <EmailIcon
            viewBox="0 0 512 512"
            color={theme.palette.icon.mediumGray}
          />
        }
        customClasses={{
          inputAdornedStart: "inputAdornedStartItem",
        }}
      />
      {/* Phone Number*/}

      <PhoneTextField
        codeEditable={true}
        defaultCountry="us"
        value={formState?.phone_number}
        handleChange={handlePhoneChange}
        error={formErrors?.phone_number}
      />

      {/* External Link */}
      <CustomTextField
        placeholder="Property External Link"
        id="property_external_link"
        name="externalLink"
        value={formState.externalLink}
        error={formErrors.externalLink}
        style={{ marginTop: 20 }}
        onChange={(e) => handleChange(e, "EXTERNAL_LINK")}
        startAdornment={
          <LinkIcon
            viewBox="0 0 477.389 477.389"
            color={theme.palette.icon.mediumGray}
          />
        }
        customClasses={{
          inputAdornedStart: "inputAdornedStartItem",
        }}
      />

      <Hidden only={["md", "lg", "xl"]}>
        <div className="signUpBtnCnt">
          <div style={{ display: "flex" }} />
          <div>
            <CustomButton
              variant="outlined"
              buttonType="success"
              onClick={() => {
                setMobileFormType("sign-in");
              }}
              style={{ marginRight: 10 }}
            >
              Sign in
            </CustomButton>

            {/* Next Button */}
            <CustomButton
              variant="contained"
              buttonType="success"
              onClick={submitHandler}
              isLoading={isLoading}
              disabled={isLoading}
            >
              {!isLoading && "Next"}
            </CustomButton>
          </div>
        </div>
      </Hidden>
      <Hidden only={["sm", "xs"]}>
        {/* Next Button */}
        <CustomButton
          variant="contained"
          buttonType="success"
          onClick={submitHandler}
          isLoading={isLoading}
          disabled={isLoading}
        >
          {!isLoading && "Next"}
        </CustomButton>
      </Hidden>
    </div>
  );
};

export default Step1;
