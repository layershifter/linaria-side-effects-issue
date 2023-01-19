import { styled } from "@linaria/react";
import { BaseButton } from "@fluentui/react";
import React from "react";

export const Title = styled.div`
  &.${BaseButton.defaultProps.baseClassName} {
    color: red;
  }
`;
