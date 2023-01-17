import { styled } from "@linaria/react";
import React from "react";

import bgColor from "./bgColor";
import "./side-effect";

const Title = styled.h1`
  background: ${bgColor};
  color: ${process.env.FIXTURE_COLOR};
`;

console.log(React.createElement(Title));
