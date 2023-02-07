import { Story } from "@storybook/react";
import {
  BrowserRouter,
  createMemoryRouter,
  MemoryRouter,
  Route,
  Routes,
} from "react-router-dom";

type RouterOption = Pick<Parameters<typeof createMemoryRouter>, "1">[1];
type WithRouterProps = {
  path?: string;
  options?: RouterOption;
};

export const withRouter = ({ path, options }: WithRouterProps) => {
  return function withRouterDecorator(Story: Story) {
    return (
      <MemoryRouter {...options}>
        <Routes>
          {/*
            Register the router only if any path is provided,
            or else all path will be registered to the story.
          */}
          {path ? <Route path={path} element={<Story />} /> : null}
          <Route path="*" element={<Story />} />
        </Routes>
      </MemoryRouter>
    );
  };
};
