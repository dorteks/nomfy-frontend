import {
  PinInputField as ChakraPinInputField,
  PinInputFieldProps,
} from "@chakra-ui/react";

const PinInputField = ({
  fontSize = 20,
  borderWidth = 3,
  borderRadius = 5,
  borderStyle = "double",
  backgroundColor = "gray.100",
  ...props
}: PinInputFieldProps) => (
  <ChakraPinInputField
    fontFamily="Roboto"
    fontSize={fontSize}
    borderStyle={borderStyle}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
    _focusVisible={{ outline: "0 !important", borderColor: "primary" }}
    {...props}
  />
);
export default PinInputField;
