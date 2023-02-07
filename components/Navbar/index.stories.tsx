import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "../../lib";
import { Navbar } from "./";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRouter({})],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
