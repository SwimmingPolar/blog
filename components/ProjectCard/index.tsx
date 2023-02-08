import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f7f9fc;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 5px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

const Box = styled.div``;

type ProjectCardProps = {
  children: React.ReactNode;
};

export const ProjectCard = ({ children }: ProjectCardProps) => {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  );
};