import { storiesOf } from "@storybook/react";
import { styled } from "@linaria/react";
import React from "react";

const Title = styled.h1`
  color: red;
`;

storiesOf("Title", module).addStory("basic", () => React.createElement(Title));
