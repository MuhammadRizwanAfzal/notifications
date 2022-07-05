// // @flow
// import React from 'react';
// import Link from 'next/link';
// import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import { useTheme } from '@material-ui/core/styles';
// import CustomTextField from '../../../../common/components/textfield/Textfield.view';
// import passwordStyles from './password.style';

// type PasswordWrapperProps = {|
//   show?: boolean,
//   placeholder?: string,
//   value?: string,
//   error?: string,
//   handleChange?: Function,
// |};

// const PasswordWrapper = (props: PasswordWrapperProps) => {
//   const {
//     show,
//     setShow,
//     placeholder,
//     value,
//     error,
//     handleChange,
//     ...rest
//   } = props;
//   const classes = customButtonStyles();
//   const theme = useTheme();

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//     setShow(!show);
//   };

//   return (
//     <CustomTextField
//       id="password"
//       type={show ? 'text' : 'password'}
//       placeholder={placeholder}
//       value={value}
//       error={error}
//       onChange={handleChange}
//       startAdornment={(
//         <PasswordIcon
//           viewBox="0 0 24 24"
//           color={theme.palette.icon.mediumGray}
//         />
//     )}
//       endAdornment={(
//         <InputAdornment position="end">
//           <IconButton
//             onClick={handleClickShowPassword}
//             onMouseDown={handleMouseDownPassword}
//           >
//             {show? <Visibility /> : <VisibilityOff />}
//           </IconButton>
//         </InputAdornment>
//     )}
//       customClasses={{
//       inputAdornedStart: {classes.inputAdornedStartItem},
//     }}
//     {...rest}
//     />

//   );
// };

// PasswordWrapper.defaultProps = {
//   show: false,
//   placeholder: '',
//   value: '',
//   error: '',
//   handleChange: ()=>{},
// };

// export default PasswordWrapper;
