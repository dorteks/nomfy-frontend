import {
  FormControl,
  FormLabel,
  InputProps,
  Input as ChakraInput,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { mergeRefs } from "react-merge-refs";
import { Control, FieldValues, useController } from "react-hook-form";

type Props = {
  name: string;
  label?: React.ReactNode;
  control: Control<FieldValues, any>;
  shouldUnregister?: boolean;
} & Exclude<InputProps, "value" | "onBlur" | "onChange">;

const getFormLabel = (label: React.ReactNode) => {
  if (!label)
    return (
      <FormLabel
        fontSize={13}
        lineHeight={6}
        color="gray.500"
        fontWeight={400}
        marginBottom={0}
        letterSpacing={0.5}
        textTransform="lowercase"
      >
        {label}
      </FormLabel>
    );
};

const Input = forwardRef(
  (
    {
      name,
      label,
      control,
      size = "lg",
      height = 12,
      defaultValue,
      fontSize = 15,
      borderWidth = 2,
      borderRadius = 6,
      shouldUnregister,
      borderStyle = "solid",
      colorScheme = "primary.600",
      backgroundColor = "transparent",
      focusBorderColor = "primary.600",
      ...props
    }: Props,
    ref
  ) => {
    const { field } = useController({
      name,
      control,
      defaultValue,
      shouldUnregister,
    });

    return (
      <FormControl>
        {getFormLabel(label)}
        <ChakraInput
          size={size}
          height={height}
          name={field.name}
          value={field.value}
          fontSize={fontSize}
          fontFamily="Roboto"
          onBlur={field.onBlur}
          borderStyle={borderStyle}
          borderWidth={borderWidth}
          onChange={field.onChange}
          colorScheme={colorScheme}
          borderRadius={borderRadius}
          ref={mergeRefs([ref, field.ref])}
          backgroundColor={backgroundColor}
          focusBorderColor={focusBorderColor}
          _focusVisible={{
            outline: "0 !important",
            borderColor: "primary.600",
          }}
          {...props}
        />
      </FormControl>
    );
  }
);
export default Input;
