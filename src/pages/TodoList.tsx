import Todo from "../components/Todo";
import { useTodos } from "../contexts/todos-context";

export const TodoList = (): JSX.Element => {
    const todos  = useTodos();

  return (
    <div>
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
