import { styled } from "@linaria/react";
import React from "react";

import "./side-effect";

const Title = styled.h1`
  color: ${process.env.FIXTURE_COLOR};
`;

console.log(React.createElement(Title));
