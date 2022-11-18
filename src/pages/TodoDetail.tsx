import { Link, useParams } from "react-router-dom";
import { useTodos } from "../contexts/todos-context";
import { Button, Card } from "@mui/material";
import styled from "styled-components";

export const TodoDetail = (): JSX.Element => {
  const { id } = useParams();
  const todos = useTodos();
  const detail = todos?.find((todo) => todo.id === id);
  return (
    <StyledCard>     
      <div>
        #{id} {detail?.title}
      </div>
      <p>{detail?.description}</p>
      <StyledLink to="/">
        <Button color="secondary">Back to home </Button>
      </StyledLink>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin-top: 10rem;
  max-width: 20rem;
  text-align: center;
  margin-inline: auto;
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 4rem;
  text-decoration: none;
`;
