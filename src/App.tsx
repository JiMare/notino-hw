import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodosContext } from "./contexts/todos-context";
import { TodoDetail } from "./pages/TodoDetail";
import { TodoList } from "./pages/TodoList";
import { getTodos } from "./services/todos";

function App() {
  const [todos, setTodos] = React.useState<TodoType[]>([]);

  React.useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return (
    <TodosContext.Provider value={todos}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/detail/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </TodosContext.Provider>
  );
}

export default App;
