import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f7f9fc;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 5px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Box = styled.div``;

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  );
};
