import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { HomeBanner } from "./";

const Wrapper = styled.div`
  position: relative;
`;

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  background-color: hsla(0, 0%, 100%, 0.85);
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.02) 0px 2px 4px 0px, rgba(0, 0, 0, 0.06) 0px 1px 0px 0px;
  width: 100%;
  position: sticky;
  top: 0;

  > ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    list-style: none;
    pointer-events: none;
    user-select: none;
  }
`;

const Content = styled.div`
  height: 1200px;
  padding: 30px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <ul>
        <li>Menu#1</li>
        <li>Menu#2</li>
        <li>Menu#3</li>
      </ul>
    </NavbarWrapper>
  );
};

export default {
  title: "Components/HomeBanner",
  component: HomeBanner,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HomeBanner>;

const Template: ComponentStory<typeof HomeBanner> = (args) => {
  return (
    <Wrapper>
      <HomeBanner {...args} />
      <Navbar />
      <Content>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
          distinctio assumenda inventore sit numquam, sunt aspernatur possimus,
          suscipit temporibus pariatur cum a voluptates at consequatur totam id
          ipsam. Enim, nisi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          similique optio numquam! Veniam eligendi minus ut fugit quis, esse
          error, tenetur, sint molestiae vel perferendis voluptatum quasi! Esse,
          autem ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          similique optio numquam! Veniam eligendi minus ut fugit quis, esse
          error, tenetur, sint molestiae vel perferendis voluptatum quasi! Esse,
          autem ratione!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          similique optio numquam! Veniam eligendi minus ut fugit quis, esse
          error, tenetur, sint molestiae vel perferendis voluptatum quasi! Esse,
          autem ratione!
        </p>
      </Content>
    </Wrapper>
  );
};

export const Default = Template.bind({});
