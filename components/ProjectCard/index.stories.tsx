import { ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import { ProjectCard } from "./";

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  font-family: Arial, sans-serif;

  h1 {
    color: black;
  }
`;

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

export const Default = () => {
  return (
    <ProjectCard>
      <Content>
        <h1>ProjectCard</h1>
      </Content>
    </ProjectCard>
  );
};
