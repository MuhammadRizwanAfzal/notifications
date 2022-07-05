import React from "react";
import SEO from "../seo";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ErrorPageStyels from "./style";
import CustomButton from "../button/Button";
import clsx from "clsx";
import { Hidden } from "@material-ui/core";
import Link from "next/link";

const CustomErrorPage = (props) => {
  const { errMsg, statusCode } = props;
  const classes = ErrorPageStyels();
  const router = useRouter();
  return (
    <>
      <SEO title="404: Not found" />
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.leftGrid}>
          <div className={classes.logoCnt}>
            <Link href="/" passHref>
              <a>
                <img
                  width={"170px"}
                  src="/images/365sol-logo.png"
                  alt="account"
                />
              </a>
            </Link>
          </div>
          <div className={classes.pageNotFound}>
            <Typography variant="h1" align="center" className={classes.heading}>
              {statusCode}
            </Typography>
            <p className={classes.errorMsg}>{errMsg}</p>
            <div className={classes.btnHome}>
              <CustomButton
                variant="contained"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                Go to Home Page
              </CustomButton>
            </div>
          </div>
        </Grid>
        <Hidden only={["xs", "sm"]}>
          <Grid
            item
            xs={12}
            md={6}
            className={clsx({
              [classes.rightGrid]: true,
              nashville: true,
            })}
          >
            <img
              className={classes.errorImg}
              src="/images/account_screen.jpg"
              alt="account"
            />
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
};

export default CustomErrorPage;
