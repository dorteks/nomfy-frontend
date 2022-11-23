import { forwardRef } from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

const Button = forwardRef((props: ButtonProps, ref: any) => {
  return <ChakraButton ref={ref} {...props} />;
});

Button.displayName = "Button";

export default Button;
