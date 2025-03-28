import Link from "next/link";

export default function CursorPage() {
  return (
    <div className="lofi-container">
      <div className="relative lofi-mb-8">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}></div>
        <h1 className="text-3xl font-bold mb-6 gradient-text inline-block">Step 2: Building with Cursor IDE</h1>
        
        <p className="text-xl lofi-paragraph max-w-3xl">
          In this section, we&apos;ll walk through using Cursor IDE to create a Next.js application from scratch.
        </p>
      </div>

      <div className="space-y-8">
        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">⌨️</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>2.1 Creating a New Next.js Project</h2>
          </div>
          
          <div className="space-y-4">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Launch Cursor and Set Up Your Project:</h3>
              <ol className="list-decimal pl-6 space-y-3 lofi-paragraph">
                <li>Open Cursor IDE</li>
                <li>Click on &quot;Create New&quot; or navigate to File &gt; New Folder</li>
                <li>Choose a location for your project and give it a name</li>
                <li>Open a terminal in Cursor (Terminal &gt; New Terminal)</li>
                <li>Run the following command to create a new Next.js project:</li>
                <div className="lofi-code-block mt-3">
                  npx create-next-app@latest .
                </div>
                <li>Follow the prompts:
                  <ul className="list-disc pl-6 mt-2 lofi-paragraph">
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

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">📂</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>2.2 Exploring the Project Structure</h2>
          </div>
          
          <div className="space-y-4">
            <p className="lofi-paragraph mb-4">Next.js creates a project with the following structure:</p>
            <div className="lofi-code-block">
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
            <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Key Files and Directories:</h3>
            <ul className="list-disc pl-6 space-y-2 lofi-paragraph">
              <li><strong>src/app/page.tsx</strong> - The main page component</li>
              <li><strong>src/app/layout.tsx</strong> - The root layout component</li>
              <li><strong>src/app/globals.css</strong> - Global styles</li>
              <li><strong>public/</strong> - Static assets like images</li>
              <li><strong>next.config.mjs</strong> - Next.js configuration</li>
            </ul>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">✨</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>2.3 Using Cursor&apos;s AI Features</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>AI Chat:</h3>
              <p className="lofi-paragraph">Open the AI Chat panel (Cmd/Ctrl + L) to ask questions about your code or get help with implementation.</p>
              <div className="lofi-bg-dark p-4 rounded-lg mt-2 lofi-border">
                <p className="font-semibold mb-2" style={{ color: "rgb(var(--link-rgb))" }}>Example prompts:</p>
                <ul className="list-disc pl-6 mt-1 lofi-paragraph">
                  <li>&quot;How do I create a new page in Next.js App Router?&quot;</li>
                  <li>&quot;Write a simple navigation component using Tailwind CSS&quot;</li>
                  <li>&quot;Explain how data fetching works in Next.js 13+&quot;</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>AI Autocomplete:</h3>
              <p className="lofi-paragraph">Cursor provides AI-powered code completion as you type. Press Tab to accept suggestions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Generate Code with Comments:</h3>
              <p className="lofi-paragraph">Use comments to describe what you want to implement, then press Cmd/Ctrl + Enter to generate code.</p>
              <div className="lofi-code-block mt-2">
{`// Create a responsive header with logo and navigation links`}
              </div>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🚀</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>2.4 Building a Simple Component</h2>
          </div>
          
          <div className="space-y-4">
            <p className="lofi-paragraph">Let&apos;s create a simple todo list component to demonstrate Cursor&apos;s capabilities:</p>
            
            <div className="lofi-bg-dark p-4 rounded-lg lofi-border mb-4">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>1. Create Components Directory:</h3>
              <p className="lofi-paragraph mb-2">Create a new directory for your components:</p>
              <div className="lofi-code-block">
                mkdir -p src/app/components
              </div>
            </div>
            
            <div className="lofi-bg-dark p-4 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>2. Create a Todo Component:</h3>
              <p className="lofi-paragraph mb-2">Create a new file at <code className="bg-black/30 px-1 rounded">src/app/components/Todo.tsx</code> and use Cursor&apos;s AI to help you implement it.</p>
              <p className="lofi-paragraph mb-2">Here&apos;s an example of what the AI might generate:</p>
              <div className="lofi-code-block overflow-auto">
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
  };`}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="lofi-flex between lofi-mt-12">
        <Link href="/setup" className="px-5 py-2.5 lofi-border rounded-md lofi-paragraph hover:text-foreground hover:border-accent/50 transition-colors">
          ← Back to Setup
        </Link>
        <Link href="/github" className="lofi-button">
          Continue to GitHub →
        </Link>
      </div>
    </div>
  );
} 