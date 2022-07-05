import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import skeletonStyles from './skeleton.style';

function TableSkeleton() {
  const classes = skeletonStyles();
  return (
    <>
      <Skeleton
        variant="rect"
        animation="wave"
        width="100%"
        height={30}
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
    </>
  );
}

export default TableSkeleton;
