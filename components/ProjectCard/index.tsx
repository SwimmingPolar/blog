import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 5px 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 30px 50px;
  margin-top: 15px;

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`

const Box = styled.div``

type ProjectCardProps = {
  children: React.ReactNode
}

export const ProjectCard = ({ children }: ProjectCardProps) => {
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  )
}
