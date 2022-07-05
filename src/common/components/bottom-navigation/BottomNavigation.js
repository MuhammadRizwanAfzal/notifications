// @flow
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import BottomNavigationStyles from './styles';

type NavigationBarProps = {
  handleBottomNav: Function,
};

export default function NavigationBar(props: NavigationBarProps) {
  const { handleBottomNav } = props;
  const classes = BottomNavigationStyles();

  return (
    <BottomNavigation value="search" onChange={handleBottomNav} className={classes.root}>
      <BottomNavigationAction label="Search Here" value="search" icon={<SearchIcon fontSize="medium" />} />
    </BottomNavigation>
  );
}
