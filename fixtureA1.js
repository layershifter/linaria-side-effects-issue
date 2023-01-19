import { styled } from "@linaria/react";
import { avatarClassNames } from "@fluentui/react-components";
import React from "react";

export const Title = styled.div`
  &.${avatarClassNames.image} {
    color: red;
  }
`;
