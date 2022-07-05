import React, { useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import switchStyles from "./switch.style";

function CustomSwitch({ label, onChange, formControlProps, ...props }) {
  const [checked, setChecked] = React.useState(false);
  const classes = switchStyles();

  const toggleChecked = () => {
    onChange(!checked);
    setChecked((prev) => !prev);
  };
  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);
  return (
    <FormGroup>
      <FormControlLabel
        {...formControlProps}
        control={
          <Switch
            checked={checked}
            classes={{
              switchBase: classes.switchBase,
              checked: classes.checked,
              track: classes.track,
            }}
            onChange={toggleChecked}
          />
        }
        label={label}
        {...props}
      />
    </FormGroup>
  );
}
CustomSwitch.defaultProps = {
  onChange: () => {},
};
export default CustomSwitch;
