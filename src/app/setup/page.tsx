import Link from "next/link";
import Image from "next/image";

export default function SetupPage() {
  return (
    <div className="lofi-container">
      <div className="relative lofi-mb-8">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}></div>
        <h1 className="text-3xl font-bold mb-6 gradient-text inline-block">Step 1: Setup</h1>
        
        <p className="text-xl lofi-paragraph max-w-3xl">
          Before we can start building our Next.js application, we need to set up all the necessary tools and accounts.
        </p>
      </div>

      <div className="space-y-8">
        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🔧</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>1.1 Install Cursor IDE</h2>
          </div>
          
          <p className="mb-6 lofi-paragraph">Cursor is an AI-powered code editor built on top of VSCode with features that help you write and understand code faster.</p>
          
          <div className="space-y-6">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Download and Install:</h3>
              <ol className="list-decimal pl-6 space-y-3 lofi-paragraph">
                <li>Visit <a href="https://cursor.sh" className="text-link hover:text-link-hover border-b border-link/30 hover:border-link transition-colors" target="_blank" rel="noopener noreferrer">https://cursor.sh</a></li>
                <li>Download the version for your operating system (Windows, macOS, or Linux)</li>
                <li>Follow the installation instructions for your platform</li>
                <li>Launch Cursor once installation is complete</li>
              </ol>
            </div>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>First-time Setup:</h3>
              <ol className="list-decimal pl-6 space-y-3 lofi-paragraph">
                <li>Create an account or sign in if you already have one</li>
                <li>Connect to your OpenAI account if you want to use GPT-4 integration</li>
                <li>Take the onboarding tour to learn about Cursor's AI features</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">📦</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>1.2 Install Node.js and npm</h2>
          </div>
          
          <p className="mb-6 lofi-paragraph">Node.js and npm are required to build and run Next.js applications.</p>
          
          <div className="space-y-6">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Download and Install:</h3>
              <ol className="list-decimal pl-6 space-y-3 lofi-paragraph">
                <li>Visit <a href="https://nodejs.org" className="text-link hover:text-link-hover border-b border-link/30 hover:border-link transition-colors" target="_blank" rel="noopener noreferrer">https://nodejs.org</a></li>
                <li>Download the LTS (Long Term Support) version</li>
                <li>Follow the installation instructions for your operating system</li>
                <li>Verify installation by opening a terminal and running:</li>
              </ol>
              <div className="lofi-code-block mt-3">
                node --version<br />
                npm --version
              </div>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🐙</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>1.3 Create GitHub Account</h2>
          </div>
          
          <p className="mb-6 lofi-paragraph">GitHub is where we'll store our code and integrate with Vercel for deployment.</p>
          
          <div className="space-y-6">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Sign Up:</h3>
              <ol className="list-decimal pl-6 space-y-3 lofi-paragraph">
                <li>Visit <a href="https://github.com" className="text-link hover:text-link-hover border-b border-link/30 hover:border-link transition-colors" target="_blank" rel="noopener noreferrer">https://github.com</a></li>
                <li>Click "Sign up" and create a new account if you don't have one</li>
                <li>Follow the onboarding process to set up your account</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🚀</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>1.4 Create Vercel Account</h2>
          </div>
          
          <p className="mb-6 lofi-paragraph">Vercel is the platform we'll use to deploy our Next.js application.</p>
          
          <div className="space-y-6">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Sign Up:</h3>
              <ol className="list-decimal pl-6 space-y-3 lofi-paragraph">
                <li>Visit <a href="https://vercel.com/signup" className="text-link hover:text-link-hover border-b border-link/30 hover:border-link transition-colors" target="_blank" rel="noopener noreferrer">https://vercel.com/signup</a></li>
                <li>Sign up with GitHub (recommended for easier integration)</li>
                <li>Complete the onboarding process</li>
              </ol>
            </div>
          </div>
        </section>
      </div>

      <div className="lofi-flex between lofi-mt-12">
        <Link href="/" className="px-5 py-2.5 lofi-border rounded-md lofi-paragraph hover:text-foreground hover:border-accent/50 transition-colors">
          ← Back to Home
        </Link>
        <Link href="/cursor" className="lofi-button">
          Continue to Cursor Guide →
        </Link>
      </div>
    </div>
  );
} 