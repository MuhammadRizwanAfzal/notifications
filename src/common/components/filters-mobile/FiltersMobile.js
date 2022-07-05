// @flow

import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import NavigationBar from '../bottom-navigation/BottomNavigation';
import CustomMobileDialog from '../dialog/customMobileDialog';
import Accordian from '../accordian/Accordian';
import CustomChceckbox from '../checkbox/checkbox.cmp';
import FiltersMobileStyles from './styles';

type FiltersMobileProps = {
  data: Array,
  priceCategories: Array,
  filtersSelected: Array,
  priceCategorySelected: Array,
  filtersChangeHandler: Function,
  priceChangeHandler: Function,
  search: Function,
};

export default function FiltersMobile(props: FiltersMobileProps) {
  const {
 data, priceCategories, filtersChangeHandler, filtersSelected,
 priceCategorySelected, priceChangeHandler, search,
} = props;
  const classes = FiltersMobileStyles();
  const [open, setOpen] = useState(false);

  const handleBottomNav = () => {
    setOpen(() => !open);
  };

  const searchClicked = () => {
    handleBottomNav();
    search();
  };

  function generateDialogListing(dataList, priceCategoriesList) {
    const listÉlements = [];
    for (let index = 0; index < dataList?.length; index += 1) {
      const titleElement = (
        <>
          <Typography color="primary" variant="subtitle1">{dataList[index].category_name}</Typography>
        </>
      );
      const content = (
        <List style={{ width: '100%' }}>
          { dataList[index].filters.map((obj) => {
            return (
              <>
                <CustomChceckbox
                  label={obj.name}
                  className={classes.filtersItem}
                  onChange={filtersChangeHandler}
                  obj={obj}
                  checked={filtersSelected.includes(obj.id)}
                />
                <Divider />
              </>
            );
        })}
        </List>
      );
      listÉlements.push(
        <>
          <ListItem button>
            <Accordian titleElement={titleElement} content={content} />
          </ListItem>
          <Divider />
        </>,
      );
    }

    // price categories
    const titleElement = (
      <>
        <Typography color="primary" variant="subtitle1">My Budget is</Typography>
      </>
    );
    const content = (
      <List style={{ width: '100%' }}>
        { priceCategoriesList.map((obj) => {
          return (
            <>
              <CustomChceckbox
                label={obj.name}
                className={classes.filtersItem}
                onChange={priceChangeHandler}
                obj={obj}
                checked={priceCategorySelected.includes(obj.id)}
              />
              <Divider />
            </>
          );
      })}
      </List>
    );
    listÉlements.push(
      <>
        <ListItem button>
          <Accordian titleElement={titleElement} content={content} />
        </ListItem>
        <Divider />
      </>,
    );
    return listÉlements;
  }

  return (
    <div className={classes.container}>
      <CustomMobileDialog
        open={open}
        title="Search"
        elements={generateDialogListing(data, priceCategories)}
        handleClose={handleBottomNav}
        buttonTitle="Go"
        isSubmit
        dialogProps={{ keepMounted: true }}
        onClick={searchClicked}
      />
      <NavigationBar handleBottomNav={handleBottomNav} />
    </div>
  );
}
