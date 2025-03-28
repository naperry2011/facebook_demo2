import Link from "next/link";
import Image from "next/image";

export default function CursorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Step 2: Building with Cursor IDE</h1>
      
      <div className="mb-12">
        <p className="text-xl mb-4">
          In this section, we'll walk through using Cursor IDE to create a Next.js application from scratch.
        </p>
      </div>

      <div className="space-y-12">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">2.1 Creating a New Next.js Project</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Launch Cursor and Set Up Your Project:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Open Cursor IDE</li>
                <li>Click on "Create New" or navigate to File &gt; New Folder</li>
                <li>Choose a location for your project and give it a name</li>
                <li>Open a terminal in Cursor (Terminal &gt; New Terminal)</li>
                <li>Run the following command to create a new Next.js project:</li>
                <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                  npx create-next-app@latest .
                </div>
                <li>Follow the prompts:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Would you like to use TypeScript? <strong>Yes</strong></li>
                    <li>Would you like to use ESLint? <strong>Yes</strong></li>
                    <li>Would you like to use Tailwind CSS? <strong>Yes</strong></li>
                    <li>Would you like to use the src/ directory? <strong>Yes</strong></li>
                    <li>Would you like to use App Router? <strong>Yes</strong></li>
                    <li>Would you like to customize the default import alias? <strong>No</strong></li>
                  </ul>
                </li>
                <li>Wait for the installation to complete</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">2.2 Exploring the Project Structure</h2>
          
          <div className="space-y-4">
            <p className="mb-4">Next.js creates a project with the following structure:</p>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
              <pre>
{`your-project-name/
├── node_modules/
├── public/          # Static assets
├── src/
│   └── app/         # App Router
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json`}
              </pre>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Key Files and Directories:</h3>
            <ul className="space-y-2">
              <li><strong>src/app/page.tsx</strong> - The main page component</li>
              <li><strong>src/app/layout.tsx</strong> - The root layout component</li>
              <li><strong>src/app/globals.css</strong> - Global styles</li>
              <li><strong>public/</strong> - Static assets like images</li>
              <li><strong>next.config.mjs</strong> - Next.js configuration</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">2.3 Using Cursor's AI Features</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">AI Chat:</h3>
              <p>Open the AI Chat panel (Cmd/Ctrl + L) to ask questions about your code or get help with implementation.</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-2">
                <p className="font-semibold">Example prompts:</p>
                <ul className="list-disc pl-6 mt-1">
                  <li>"How do I create a new page in Next.js App Router?"</li>
                  <li>"Write a simple navigation component using Tailwind CSS"</li>
                  <li>"Explain how data fetching works in Next.js 13+"</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">AI Autocomplete:</h3>
              <p>Cursor provides AI-powered code completion as you type. Press Tab to accept suggestions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Generate Code with Comments:</h3>
              <p>Use comments to describe what you want to implement, then press Cmd/Ctrl + Enter to generate code.</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-2 font-mono text-sm">
                <pre>
{`// Create a responsive header with logo and navigation links`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">2.4 Building a Simple Next.js App</h2>
          
          <div className="space-y-4">
            <p>Let's create a simple todo list application to demonstrate Cursor's capabilities:</p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">1. Create Components Directory:</h3>
              <p>Create a new directory for your components:</p>
              <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono text-sm">
                mkdir -p src/app/components
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">2. Create a Todo Component:</h3>
              <p>Create a new file at <code>src/app/components/Todo.tsx</code> and use Cursor's AI to help you implement it:</p>
              <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono text-sm overflow-auto">
{`"use client";

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

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
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          className="flex-grow p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-white border rounded shadow-sm"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2 h-5 w-5"
              />
              <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No todos yet. Add one above!</p>
      )}
    </div>
  );
}`}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">3. Update the Home Page:</h3>
              <p>Modify <code>src/app/page.tsx</code> to use your new component:</p>
              <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono text-sm">
{`import TodoList from "./components/Todo";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Next.js Todo App
        </h1>
        <TodoList />
      </div>
    </main>
  );
}`}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">2.5 Running Your Application</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Start the Development Server:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open a terminal in Cursor (if not already open)</li>
                <li>Run the development server:</li>
                <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono text-sm">
                  npm run dev
                </div>
                <li>Open your browser and navigate to <code>http://localhost:3000</code></li>
                <li>You should see your Todo application running</li>
              </ol>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link href="/setup" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200">
          ← Back to Setup
        </Link>
        <Link href="/github" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800">
          Continue to GitHub Guide →
        </Link>
      </div>
    </div>
  );
} 