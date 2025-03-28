"use client";

import { useState, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [isSmooth, setIsSmooth] = useState(false);

  // Enable animations after initial render
  useEffect(() => {
    setIsSmooth(true);
  }, []);

  const addTodo = () => {
    if (input.trim() === "") return;
    
    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="lofi-card max-w-md mx-auto relative">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-40" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.1)" }}></div>
      
      <h1 className="text-2xl font-bold mb-4 gradient-text">Todo List</h1>
      
      <div className="flex mb-4 relative group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          className="flex-grow p-3 lofi-bg-dark outline-none text-foreground lofi-border rounded-l transition-all"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="lofi-button rounded-l-none !px-6"
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-3">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-3 lofi-bg-dark lofi-border rounded-lg transition-all ${
              isSmooth ? 'animate-fadeIn' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 rounded cursor-pointer mr-3"
                style={{ 
                  accentColor: `rgb(var(--accent-rgb))`,
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  borderColor: `rgb(var(--border-rgb))`
                }}
              />
              <span className={`${todo.completed ? "line-through text-muted" : "text-foreground"} transition-all`}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-muted hover:text-accent transition-colors px-2 py-1 rounded-full hover:bg-black/30"
              aria-label="Delete todo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <div className="p-8 flex flex-col items-center justify-center text-center lofi-border border-dashed rounded-lg lofi-bg-dark">
          <p className="text-muted mb-2">No todos yet.</p>
          <p className="text-xs text-muted/70">Add a task using the input above.</p>
        </div>
      )}

      {/* Add a lofi-themed animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 