import { createContext, useContext } from "react";

export const TodosContext = createContext<TodoType[] | null>(null);

export const useTodos = () => useContext(TodosContext);