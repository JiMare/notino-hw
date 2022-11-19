import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import styled from "styled-components";

type Props = {
  todo: TodoType;
};

const Todo = React.memo<Props>(function Todo({ todo }: Props): JSX.Element {
  return (
    <StyledCard>
      <StyledLink to={`detail/${todo.id}`}>{todo.title}</StyledLink>
    </StyledCard>
  );
});

export default Todo;

const StyledCard = styled(Card)`
  margin-top: 2rem;
  max-width: 20rem;
  text-align: center;
  margin-inline: auto;
  padding: 2rem;
  background-color: #690fc3;
  animation: fade-blur-in 1s ease-out forwards;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #8021e0;
    transform: translateY(-0.25rem);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #a85ff0;
`;
