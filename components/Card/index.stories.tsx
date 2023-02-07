import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { Card } from "./";

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
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default = () => {
  return (
    <Card>
      <Content>
        <h1>Card</h1>
      </Content>
    </Card>
  );
};
