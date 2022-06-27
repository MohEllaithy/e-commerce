import {
  BaseButton,
  GoogleSignINButton,
  InvertedNButton,
} from "./button.style";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignINButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedNButton,
  }[buttonType]);

function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

export default Button;
