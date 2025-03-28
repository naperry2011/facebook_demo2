import Link from "next/link";
import FlowDiagram from "./components/FlowDiagram";

export default function Home() {
  return (
    <div className="lofi-container">
      <div className="text-center lofi-mb-8 relative">
        <div className="absolute w-full h-full left-0 top-0 opacity-10 pointer-events-none">
          <div className="absolute w-20 h-20 rounded-full blur-3xl -top-10 left-1/3 animate-pulse" style={{ backgroundColor: "rgb(var(--accent-rgb))" }}></div>
          <div className="absolute w-32 h-32 rounded-full blur-3xl -top-20 right-1/4 opacity-20 animate-pulse" style={{ backgroundColor: "rgb(var(--link-rgb))", animationDelay: "2s" }}></div>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 gradient-text">
          Build a Next.js App with Cursor
        </h1>
        <p className="text-xl mb-4 lofi-paragraph" style={{ maxWidth: "48rem", margin: "0 auto" }}>
          A comprehensive step-by-step guide to help you build and deploy a Next.js web application using Cursor IDE, GitHub, and Vercel.
        </p>
        <div className="inline-block lofi-border rounded-full px-3 py-1 lofi-bg-dark" style={{ color: "rgb(var(--accent-rgb))", fontSize: "0.875rem" }}>
          📻 Lofi Tech Edition
        </div>
      </div>

      <div className="relative glow">
        <FlowDiagram />
        <div className="absolute w-full h-full left-0 top-0 pointer-events-none">
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[80%] h-12 blur-3xl opacity-20" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}></div>
        </div>
      </div>

      <div className="lofi-grid cols-4 lofi-my-16">
        {[ 
          { 
            href: "/setup", 
            title: "1. Setup", 
            description: "Install and configure all necessary tools.",
            icon: "🔧"
          },
          { 
            href: "/cursor", 
            title: "2. Cursor IDE", 
            description: "Learn to use Cursor for building your app.",
            icon: "⌨️" 
          },
          { 
            href: "/github", 
            title: "3. GitHub", 
            description: "Connect your project for version control.",
            icon: "🐙" 
          },
          { 
            href: "/vercel", 
            title: "4. Vercel", 
            description: "Deploy your application to the world.",
            icon: "🚀" 
          } 
         ].map((item, index) => (
          <Link 
            key={item.href}
            href={item.href} 
            className="lofi-card group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="lofi-flex mb-3">
              <span className="text-2xl mr-3">{item.icon}</span>
              <h2 className="text-2xl font-bold transition-colors" style={{ 
                color: "rgb(var(--accent-rgb))"
              }}>{item.title}</h2>
            </div>
            <p className="lofi-paragraph">{item.description}</p>
          </Link>
        ))}
      </div>

      <div className="lofi-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}></div>
        <h2 className="text-2xl font-bold mb-6 gradient-text">Why This Stack?</h2>
        <div className="lofi-grid cols-3">
          {[ 
            { 
              title: "Cursor IDE", 
              description: "AI-powered code editor for faster, smarter coding with enhanced productivity features.",
              icon: "⌨️"
            },
            { 
              title: "Next.js", 
              description: "Powerful React framework for modern web apps with optimized performance and SEO.",
              icon: "⚛️" 
            },
            { 
              title: "Vercel + GitHub", 
              description: "Seamless deployment and version control workflow for continuous delivery.",
              icon: "🔄" 
            }
           ].map((stack) => (
            <div 
              key={stack.title} 
              className="lofi-bg-dark p-6 rounded-xl lofi-border transition-all duration-300 group h-full"
              style={{ borderColor: "rgba(var(--border-rgb), 0.5)" }}
            >
              <div className="lofi-flex mb-3">
                <span className="text-2xl mr-3">{stack.icon}</span>
                <h3 className="text-xl font-semibold" style={{ 
                  color: "rgb(var(--link-rgb))"
                }}>{stack.title}</h3>
              </div>
              <p className="lofi-paragraph">{stack.description}</p>
            </div>
          ))}
        </div>
        
        <div className="lofi-flex center lofi-mt-8">
          <Link href="/setup" className="lofi-button">
            Start Learning →
          </Link>
        </div>
      </div>
    </div>
  );
}
