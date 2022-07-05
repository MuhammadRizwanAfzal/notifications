// @flow
import React, { useState, useEffect, useContext } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { withStyles } from '@material-ui/styles';
import checkboxStyles from './favorite.style';
import CustomIconButton from '../IconButton/IconButton.cmp';
import { markAsFavourite, markAsUnFavourite } from '../../actions/listings';
import Context from '../context/context';
import ButtonDropdown from '../dropdown/Dropdown';

const FavoriteButton = ({
 tbUnit, updateUnit, onFavDone, onUnFavDone, size, style,
}) => {
  const [open, setOpen] = useState(false);
  const ContextConsumer = useContext(Context);
  const { userid } = ContextConsumer.profile;
  const classes = checkboxStyles();
  const router = useRouter();
  // Handle Fav Button Click
  const handleFavClick = (e) => {
    if (tbUnit.is_user_fav) {
      updateUnit(e, {
        ...tbUnit,
        is_user_fav: 0,
        total_user_favourite: tbUnit.total_user_favourite - 1,
      });
      // Mark as un Favorite API call
      markAsUnFavourite(tbUnit.ID, userid, (res) => {
        onUnFavDone(res);
      });
    } else {
      updateUnit(e, {
        ...tbUnit,
        is_user_fav: 1,
        total_user_favourite: tbUnit.total_user_favourite + 1,
      });
      // Mark as favorite api call
      markAsFavourite(tbUnit.ID || tbUnit.id, userid, (res) => {
        onFavDone(res);
      });
    }
  };

  // Handle tooltip close
  const handleLoginLinkClick = (e) => {
    e.stopPropagation();
    router.push('/login/traveler');
  };

  return (
    <>
      {!userid ? (
        <ButtonDropdown
          iconButton
          popperWidth={200}
          buttonProps={{
            style: {
              padding: 3,
              borderRadius: 4,
              ...style,
            },
          }}
          popperProps={{ disablePortal: false }}
          buttonText={(
            <>
              <FavoriteBorderIcon
                className={clsx({
                  [classes.favouriteIcon]: true,
                  [classes.favouriteIconLarge]: size === 'large',
                })}
              />
              <Typography variant="body1" className={classes.peopleFavText}>
                {tbUnit.total_user_favourite}
              </Typography>
            </>
          )}
        >
          <div className={classes.favBtnContent}>
            <Typography variant="body1" className={classes.tooltipText}>
              Please
              {' '}
              <a className={classes.loginLink} onClick={handleLoginLinkClick}>
                login
              </a>
              {' '}
              to mark as favorite.
            </Typography>
          </div>
        </ButtonDropdown>
      ) : (
        <CustomIconButton
          style={{
            padding: 3,
            borderRadius: 4,
            ...style,
          }}
          onClick={handleFavClick}
        >
          {tbUnit.is_user_fav ? (
            <FavoriteIcon
              className={clsx({
                [classes.favouriteIcon]: true,
                [classes.favouriteIconLarge]: size === 'large',
              })}
            />
          ) : (
            <FavoriteBorderIcon
              className={clsx({
                [classes.favouriteIcon]: true,
                [classes.favouriteIconLarge]: size === 'large',
              })}
            />
          )}
          <Typography variant="body1" className={classes.peopleFavText}>
            {tbUnit.total_user_favourite}
          </Typography>
        </CustomIconButton>
      )}
    </>
  );
};
FavoriteButton.defaultProps = {
  onUnFavDone: () => {},
  onFavDone: () => {},
  size: 'small',
  style: null,
};
export default FavoriteButton;
