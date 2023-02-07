import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import carrotSvg from "/public/images/carrot.svg";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  height: 50px;
  width: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.85);
  backdrop-filter: blur(12px);
  padding: 10px 15px;
  height: 100%;
  width: 100%;

  .name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .name h3 {
    font-size: 18px;
    font-weight: bold;
  }

  .image img {
    width: 65px;
    height: 65px;
    transform: rotate(-15deg);
  }

  .links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

export const Menu = [
  {
    title: "summary",
    link: "/summary",
  },
  {
    title: "projects",
    link: "/projects",
  },
  {
    title: "stacks",
    link: "/stacks",
  },
  {
    title: "contact",
    link: "/contact",
  },
];

export const Navbar: FC = () => {
  return (
    <Wrapper>
      <Box>
        <div className="name">
          <h3>YOO DONG HEON</h3>
        </div>
        <div className="image">
          <Image src={carrotSvg} alt="carrot" width={36} height={36} priority />
        </div>
        <div className="links">
          {Menu.map(({ title, link }, index) => (
            <Link key={index} href={link}>
              {title}
            </Link>
          ))}
        </div>
      </Box>
    </Wrapper>
  );
};
