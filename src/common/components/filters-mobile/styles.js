import { makeStyles } from '@material-ui/styles';

const FiltersMobileStyles = makeStyles((theme) => ({
    container: {
        '& .MuiBottomNavigation-root': {
            borderTop: `3px solid ${theme.palette.primary.main}`,
        },
    },
    filtersItem: {
        padding: 8,
        '& span': {
            fontSize: 15,
        },
      },
}));

export default FiltersMobileStyles;
