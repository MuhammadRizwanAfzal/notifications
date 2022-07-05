// @flow
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import styles from "./signUp.style";
import CustomTextField from "../../../../common/components/textfield/Textfield.view";
import UserIcon from "../../../../common/icons/user.icon";
import EmailIcon from "../../../../common/icons/email.icon";
import PasswordIcon from "../../../../common/icons/password.icon";
import ConfirmPasswordIcon from "../../../../common/icons/confirmPassword.icon";
import CustomButton from "../../../../common/components/button/Button";
import schema from "./schemaValidation";
import { travelerSignUp } from "../../../../common/actions/auth";
import { getErrors } from "../../../../common/shared.utils";
import PhoneIcon from "../../../../common/icons/phone.icon";
import CustomAlert from "../../../../common/components/custom-alerts/customAlerts.cmp";
import CustomizedDialog from "../../../../common/components/dialog/customDialog/customDialog.cmp";

const SignUp = (props) => {
  const classes = styles();
  const theme = useTheme();
  const { registered, setMobileFormType } = props;
  const [errors, setErrors] = useState({});

  // Sign up state
  const [signUp, setSignUp] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [loginError, setLoginError] = useState("");

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  const [openTnCDialog, setOpenTnCDialog] = useState(false);

  // Fields on change Handler
  const handleChange = (e) => {
    errors[e.target.name] = "";

    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickShowPassword = (type) => {
    if (type === "passwordIcon") {
      setShowPassword({
        ...showPassword,
        password: !showPassword.password,
      });
    } else {
      setShowPassword({
        ...showPassword,
        confirmPassword: !showPassword.confirmPassword,
      });
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCloseDialog = () => {
    // function handles close dialog
    setOpenTnCDialog(false);
  };

  const handleOpenDialog = () => {
    // function handles open dialog
    setOpenTnCDialog(true);
  };

  const submitHandler = () => {
    schema
      .validate(signUp, { abortEarly: false })
      .then(async (valid) => {
        const token = "";
        const request = {
          ...valid,
          captcha_code: token,
        };
        setIsLoading(true);
        travelerSignUp(
          request,
          () => {
            setIsLoading(false);
            registered(); // Calling Registered for view change to success
          },
          (err) => {
            setIsLoading(false);
            const custom =
              err?.response.data?.errMsgs[
                Object.keys(err?.response?.data?.errMsgs || "")
              ];
            setLoginError(custom || "Something went wrong, please try later");
          }
        );
      })
      .catch((err) => {
        setErrors(getErrors(err));
      });
  };

  return (
    <section className={classes.signUpInnerCnt}>
      <Typography
        variant="h2"
        align="center"
        className={classes.mainHeading}
        style={{ marginBottom: 0 }}
      >
        Create an Expert Account
      </Typography>

      <Typography variant="h3" align="center" className={classes.label}>
        Connect with guests and get paid for helping them
      </Typography>
      <div className={classes.fieldsCnt}>
        {loginError && <CustomAlert type="failure" description={loginError} />}
        <Grid container spacing={3} style={{ marginBottom: 10 }}>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
            {/* First Name */}
            <CustomTextField
              placeholder="First Name"
              id="first_name"
              name="first_name"
              value={signUp.first_name}
              error={errors?.first_name?.[0]?.message}
              onChange={handleChange}
              formControlprops={{ style: { width: "100%", marginBottom: 0 } }}
              startAdornment={
                <UserIcon
                  viewBox="0 0 511.974 511.974"
                  color={theme.palette.icon.mediumGray}
                />
              }
              customClasses={{
                inputAdornedStart: classes.inputAdornedStartItem,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
            {/* Last Name */}
            <CustomTextField
              placeholder="Last Name"
              id="last_name"
              name="last_name"
              value={signUp.last_name}
              error={errors?.last_name?.[0]?.message}
              onChange={handleChange}
              formControlprops={{ style: { width: "100%", marginBottom: 0 } }}
              startAdornment={
                <UserIcon
                  viewBox="0 0 511.974 511.974"
                  color={theme.palette.icon.mediumGray}
                />
              }
              customClasses={{
                inputAdornedStart: classes.inputAdornedStartItem,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
            {/* Phone_number */}
            <CustomTextField
              placeholder="Contact Phone - (001XXXX)"
              id="phone_number"
              name="phone_number"
              value={signUp.phone_number}
              error={errors?.phone_number?.[0]?.message}
              onChange={handleChange}
              formControlprops={{ style: { width: "100%", marginBottom: 0 } }}
              startAdornment={
                <PhoneIcon
                  viewBox="0 0 511.974 511.974"
                  color={theme.palette.icon.mediumGray}
                />
              }
              customClasses={{
                inputAdornedStart: classes.inputAdornedStartItem,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={6}>
            {/* Email */}
            <CustomTextField
              placeholder="Email"
              id="email"
              name="email"
              value={signUp.email}
              error={errors?.email?.[0]?.message}
              onChange={handleChange}
              formControlprops={{ style: { width: "100%", marginBottom: 0 } }}
              startAdornment={
                <EmailIcon
                  viewBox="0 0 512 512"
                  color={theme.palette.icon.mediumGray}
                />
              }
              customClasses={{
                inputAdornedStart: classes.inputAdornedStartItem,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={12} lg={6} xl={12}>
            {/* Password */}
            <CustomTextField
              id="password"
              name="password"
              type={showPassword.password ? "text" : "password"}
              placeholder="Enter your Password"
              value={signUp.password}
              error={errors?.password?.[0]?.message}
              onChange={handleChange}
              formControlprops={{ style: { width: "100%", marginBottom: 0 } }}
              startAdornment={
                <PasswordIcon
                  viewBox="0 0 24 24"
                  color={theme.palette.icon.mediumGray}
                />
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    name="passwordIcon"
                    onClick={() => {
                      handleClickShowPassword("passwordIcon");
                    }}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword.password ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              customClasses={{
                inputAdornedStart: classes.inputAdornedStartItem,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={12}>
            {/* Confirm Password */}
            <CustomTextField
              id="confirm_password"
              name="confirm_password"
              placeholder="Re Enter Password"
              type={showPassword.confirmPassword ? "text" : "password"}
              value={signUp.confirm_password}
              error={errors?.confirm_password?.[0]?.message}
              onChange={handleChange}
              formControlprops={{ style: { width: "100%", marginBottom: 0 } }}
              startAdornment={
                <ConfirmPasswordIcon
                  viewBox="0 0 24 24"
                  color={theme.palette.icon.mediumGray}
                />
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    name="confirmPasswordIcon"
                    onClick={() => {
                      handleClickShowPassword("çonfirmPasswordIcon");
                    }}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword.confirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              customClasses={{
                inputAdornedStart: classes.inputAdornedStartItem,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={12}>
            {/* Title */}
            <CustomTextField
              placeholder="Title"
              id="company_name"
              name="company_name"
              value={signUp.company_name}
              error={errors?.company_name?.[0]?.message}
              onChange={handleChange}
              formControlprops={{ style: { width: "100%", marginBottom: 0 } }}
              startAdornment={
                <UserIcon
                  viewBox="0 0 511.974 511.974"
                  color={theme.palette.icon.mediumGray}
                />
              }
              customClasses={{
                inputAdornedStart: classes.inputAdornedStartItem,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={6} xl={12}>
            {/* Website Link */}
            <CustomTextField
              placeholder="Website Link"
              id="url"
              name="url"
              value={signUp.url}
              error={errors?.url?.[0]?.message}
              onChange={handleChange}
              formControlprops={{ style: { width: "100%", marginBottom: 0 } }}
              startAdornment={
                <UserIcon
                  viewBox="0 0 511.974 511.974"
                  color={theme.palette.icon.mediumGray}
                />
              }
              customClasses={{
                inputAdornedStart: classes.inputAdornedStartItem,
              }}
            />
          </Grid>
        </Grid>

        <Typography align="left">
          By clicking Sign up button I agree to{" "}
          <CustomButton
            variant="text"
            buttonType="success"
            style={{ padding: "0px" }}
            onClick={handleOpenDialog}
          >
            365sol Terms and Conditions
          </CustomButton>
        </Typography>

        <Hidden only={["xs", "sm"]}>
          <div style={{ marginTop: 20, marginBottom: 20, textAlign: "center" }}>
            <CustomButton
              variant="contained"
              buttonType="success"
              onClick={submitHandler}
              isLoading={isLoading}
              disabled={isLoading}
              className={classes.submitBtn}
            >
              {!isLoading && "Submit"}
            </CustomButton>
          </div>
        </Hidden>
        {/* Buttons for mobile view */}
        <Hidden only={["md", "lg", "xl"]}>
          <div style={{ display: "flex" }}>
            <CustomButton
              variant="outlined"
              buttonType="success"
              className={classes.submitBtn}
              onClick={() => {
                setMobileFormType("sign-in");
              }}
              style={{ marginRight: 10 }}
            >
              Sign in
            </CustomButton>{" "}
            <CustomButton
              variant="contained"
              buttonType="success"
              onClick={submitHandler}
              isLoading={isLoading}
              disabled={isLoading}
              className={classes.submitBtn}
            >
              {!isLoading && "Submit"}
            </CustomButton>
          </div>
        </Hidden>
      </div>
      <CustomizedDialog
        onClose={handleCloseDialog}
        open={openTnCDialog}
        dialogProps={{ PaperProps: { className: classes.dialogCnt } }}
        title="365sol Terms and Conditions"
        hideActionCnt
      >
        <section className={classes.termsConditionsCnt}>
          <Typography variant="h3">
            1.0 www.365sol.com terms and conditions
          </Typography>
          <Typography variant="body1">
            <b>1.1</b> 365sol provides a web site at www.365sol.com (the
            &quot;Site&ldquo;). The Site is an online portal, which contains
            information about travel businesses, including places to stay,
            things to do and more as well as bulletin boards, forums, and other
            services to which many people, outside the control of 365sol, can
            contribute opinion and information. The Site includes information
            about the products and/or services of third parties and may permit
            access to information and services provided by third parties
            (&quot;Third Party Content&ldquo;). Your use of the Site is subject
            to your compliance with the terms and conditions set forth below.
          </Typography>
          <br />
          <Typography variant="body1">
            <b>1.2</b> Web site terms and conditions of use. This page states
            the terms and conditions under which you may use this Web Site.
            Please read this page carefully before accessing or using the Site.
            By accessing or using the Site, you agree to be bound by the terms
            and conditions set forth below. If you do not wish to be bound by
            these terms and conditions, you may not access or use the Site.
            365sol may modify these terms and conditions at any time at its
            discretion by updating this posting. You must review this page
            periodically to review the terms and conditions because they govern
            your use of this Web Site and are binding upon you.
          </Typography>{" "}
          <br />
          <Typography variant="body1">
            <b>1.3</b> You agree to review the agreement periodically to be
            aware of such modifications and your continued access or use of the
            site shall be deemed your conclusive acceptance of the modified
            agreement. You also agree that it is not the responsibility of
            365sol to make you aware in any other way of any changes we may deem
            necessary to make to these terms and conditions. Furthermore, that
            it is entirely your responsibility to ensure that you read these
            terms and conditions regularly.
          </Typography>{" "}
          <br />
          <Typography variant="h3">2.0 Your use of the Site</Typography>
          <Typography variant="body1">
            <b>2.1</b> You understand that, except for information, products or
            services clearly identified as being supplied by 365sol, 365sol does
            not operate, control or endorse any information, products or
            services on the Internet in any way, whether or not links to them
            may be provided on the Site.
          </Typography>{" "}
          <br />
          <Typography variant="body1">
            <b>2.2</b> 365sol does not warrant that the Site will be
            uninterrupted or error-free or that defects in the service will be
            corrected.
          </Typography>{" "}
          <br />
          <Typography variant="body1">
            <b>2.3</b> You accept that 365sol cannot and does not guarantee or
            warrant that files available for downloading through the Site or any
            other web site that 365sol may link to, will be free of infection or
            viruses, worms, Trojan horses or other code that may have
            contaminating or destructive properties. You are responsible for
            implementing sufficient procedures and checkpoints to satisfy your
            particular requirements for preventing loss of any sort resulting
            from such infections, viruses etc.
          </Typography>{" "}
          <br />
          <Typography variant="h3">
            3.0 Copyright, Licenses and Idea Submissions
          </Typography>
          <Typography variant="body1">
            <b>3.1</b> Copyright © 365sol either owns the intellectual property
            rights in the underlying HTML , text, audio clips, video clips and
            other content that is made available to you on this web site, or has
            the right to use such content. Permission is hereby granted to
            persons to view the material on this web site and, to the extent
            necessary in order to lawfully access and use the services available
            on this web site for personal use, to electronically copy, archive
            and to print in hard copy, portions of this web site. You may not
            copy, reproduce, republish, upload, post, transmit, modify, re-sell
            or distribute in any manner, the material on the Site, including
            text, graphics, code and/or software without the prior written
            permission of 365sol.
          </Typography>{" "}
          <br />
          <Typography variant="body1">
            <b>3.2</b> Limited license. 365sol grants to you a limited license
            to display on your computer, print, download and use all publicly
            available information on this site for any lawful purpose. Other
            contents such as logos, photographs, charts and the like are made
            available to you on this web site, for non-commercial, personal
            purposes only and on condition that: You do not modify any such
            content, and You include with and display on your copy of such
            content the 365sol copyright notice and this limited license.
            Nothing contained in this Section shall be construed as conferring
            any right in any copyright, trademarks or other intellectual
            property of 365sol or any other person who owns the copyright or
            other intellectual property in content provided on this web site.
          </Typography>{" "}
          <br />
          <Typography variant="body1">
            <b>3.3</b> In no event are you permitted to publish, re-transmit, re
            -distribute or otherwise re-produce any of the content on the Site
            in any format to any third party.
          </Typography>
          <br />
          <Typography variant="body1">
            <b>3.4</b> You may store, submit materials to any public areas of
            the Site such as bulletin boards, forums and email lists ( the
            &quot;Submitted Materials&ldquo;). You agree to grant to 365sol a
            non-exclusive, royalty-free, world-wide perpetual license, with the
            right to sub-license, to reproduce, distribute, transmit, create
            derivative works of, publicly display and publicly perform any
            materials and other information by all means and in any media now
            known or hereafter developed.{" "}
          </Typography>
          <br />
          <Typography variant="body1">
            <b>3.5</b> You also grant to 365sol the right to use your name in
            connection with the Submitted Materials and other information as
            well as in connection with all advertising, marketing and
            promotional material related thereto. You agree that you shall have
            no recourse against the Company for any alleged or actual
            infringement or misappropriation of any proprietary right in your
            communications to 365sol.com.{" "}
          </Typography>
          <br />
          <Typography variant="body1">
            <b>3.6</b> Users should not share, tag or publish content that
            violates the rights of others . Alleged illegal and/or offensive
            content will be removed promptly upon notification to 365sol.com
          </Typography>{" "}
          <br />
          <Typography variant="h3">4.0 Trademarks</Typography>
          <Typography variant="body1">
            <b>4.1</b> 356sol LLC, 365sol.com or any other product names,
            company names, trademarks, logos etc. cited herein are the property
            of their respective owners. All such content is protected by
            intellectual property and copyright laws of United States and
            foreign jurisdictions. Unauthorized use of the content may violate
            applicable copyright, trademark or other intellectual property laws
            or other laws. Although we will attempt to keep information on
            365sol.com accurate, the accuracy of the information provided cannot
            be guaranteed. Information on this web site may contain inaccuracies
            or typographical errors. Information may be changed or updated
            without notice. This web Site does not constitute an offer or
            contract. Price and availability of information is subject to change
            without notice. Any communication or material you post or transmit
            to 365sol over the Internet is, and will be treated as,
            non-confidential and non-proprietary. Upon the transmission of any
            personal information to 365sol, including but not limited to,
            name(s), address(es), telephone number(s), email
            address(es),identification number(s), etc., you expressly grant
            permission to 365sol and its affiliates to use such information for
            any lawful purpose. By transmitting or posting any communication or
            material to this site you agree that 365sol and any of its
            affiliates may use your communication as material for any purpose,
            including reproduction, transmission, publication, broadcast and
            posting.365sol and any of its affiliates will not have the
            responsibility to respond to messages posted on this site.
            Furthermore, posting or transmittal of any unlawful, threatening,
            libellous, defamatory, obscene, pornographic or profane material or
            any material that could constitute or encourage conduct that would
            be considered a criminal offence or violation of any law is strictly
            prohibited. You agree that 365sol and any third party mentioned on
            this Web Site will not be responsible to you for any loss or
            damages, including direct, indirect, special or consequential
            damages or loss of data or loss of profit, even if 365sol or any
            such third party has been advised of the possibility of such damage
            or loss.
          </Typography>
          <br />
          <Typography variant="h3">
            5.0 General Limitation of Liability
          </Typography>
          <Typography variant="body1">
            <b>5.1</b> 365sol provides the Site on an &quot;as is&ldquo; basis
            and makes no representations whatsoever about any other web site
            which you may access through the Site or which may link to this
            Site. When you access a site outside the Site, please understand
            that it is independent from the Site and that 365sol has no control
            over the content on that web site. In addition, a link to the Site
            does not mean that 365sol endorses or accepts
          </Typography>
          <br />
          <Typography variant="h3">6.0 Indemnification</Typography>
          <Typography variant="body1">
            <b>6.1</b> You agree to indemnify, defend and hold harmless the
            Site, its officers, directors, employees, agents, licensors,
            suppliers and any third party information providers to the Service
            from and against all losses, expenses, damages and costs, including
            legal costs:- (i) resulting from any violation of these terms and
            conditions (including negligent or wrongful conduct) by you or any
            other person accessing the Site and its services; (ii) howsoever
            arising as a result of you downloading files from the Site or that
            we include links to; and, (iii) howsoever arising as a result of any
            action you take as either a direct or indirect result of
            information, opinions or other materials on the Site, or generated
            from the Site and its services. It is solely your responsibility to
            evaluate the accuracy, completeness and usefulness of all opinions,
            services, merchandise and other information provided through the
            Site and its services or on the Internet generally.
          </Typography>
          <br />
          <Typography variant="h3">7.0 Governing law and disputes</Typography>
          <Typography variant="body1">
            <b> 7.1</b> This Agreement shall be governed by and constructed
            exclusively in accordance with the laws of the United States.
          </Typography>
          <br />
          <Typography variant="body1">
            <b>7.2</b> You agree that any legal action or proceeding between
            365sol and you for any purpose concerning this Agreement or the
            parties obligations hereunder shall be brought exclusively in a
            court of competent jurisdiction sitting in the United States.
          </Typography>
          <br />
          <Typography variant="body1">
            <b>7.3</b> 365sol’s failure to insist upon or enforce strict
            performance of any part of this Agreement shall not be construed as
            a waiver of the whole of this Agreement
          </Typography>{" "}
          <br />
          <Typography variant="body1">
            <b>7.4</b> If any part of our terms and conditions is unenforceable
            (including any provisions in which we exclude our liability to you)
            the enforceability of any other part of these conditions will not be
            affected.
          </Typography>
        </section>
      </CustomizedDialog>
    </section>
  );
};

export default SignUp;
