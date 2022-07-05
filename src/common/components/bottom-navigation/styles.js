import { makeStyles } from '@material-ui/styles';

const BottomNavigationStyles = makeStyles(() => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 2,
    },
}));

export default BottomNavigationStyles;
