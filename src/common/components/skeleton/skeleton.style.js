import { makeStyles } from '@material-ui/styles';

const skeletonStyles = makeStyles((theme) => ({
    headingSkeletonCnt: {
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'space-between'
    },
  tableHeaderSkeleton: {
    marginBottom: 15,
  },
  tableRown: {
      marginBottom: 10
  }
}));

export default skeletonStyles;
