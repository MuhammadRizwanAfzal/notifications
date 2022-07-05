import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import skeletonStyles from "./skeleton.style";

function TableWithHeaderSkeleton() {
  const classes = skeletonStyles();
  return (
    <>
      <div className={classes.headingSkeletonCnt}>
        <Skeleton
          variant="rect"
          animation="wave"
          width={200}
          height={40}
          className={classes.headingSkeleton}
        />
        <Skeleton
          variant="rect"
          animation="wave"
          width={150}
          height={40}
          className={classes.headingSkeleton}
        />
      </div>
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={60}
        className={classes.tableHeaderSkeleton}
      />
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />

      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />

      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={20}
        className={classes.tableRown}
      />
    </>
  );
}

export default TableWithHeaderSkeleton;
