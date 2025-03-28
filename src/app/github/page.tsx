import Link from "next/link";

export default function GitHubPage() {
  return (
    <div className="lofi-container">
      <div className="relative lofi-mb-8">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}></div>
        <h1 className="text-3xl font-bold mb-6 gradient-text inline-block">Step 3: Connecting to GitHub</h1>
        
        <p className="text-xl lofi-paragraph max-w-3xl">
          In this section, we&apos;ll connect our Next.js application to GitHub for version control and collaboration.
        </p>
      </div>

      <div className="space-y-8">
        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">📝</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>3.1 Initialize Git Repository</h2>
          </div>
          
          <div className="space-y-4">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Set Up Local Git Repository:</h3>
              <p className="lofi-paragraph mb-2">Open a terminal in Cursor and run these commands:</p>
              <div className="lofi-code-block">
                {`# Initialize a new git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit"`}
              </div>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🐙</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>3.2 Create a GitHub Repository</h2>
          </div>
          
          <div className="space-y-4">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Steps to Create a Repository:</h3>
              <ol className="list-decimal pl-6 space-y-3 lofi-paragraph">
                <li>
                  Log in to your GitHub account at <a href="https://github.com" className="text-link hover:text-link-hover border-b border-link/30 hover:border-link transition-colors" target="_blank" rel="noopener noreferrer">github.com</a>
                </li>
                <li>
                  Click the &quot;+&quot; icon in the top-right corner, then select &quot;New repository&quot;
                </li>
                <li>
                  Enter a repository name (e.g., &quot;nextjs-todo-app&quot;)
                </li>
                <li>
                  Add an optional description
                </li>
                <li>
                  Choose &quot;Public&quot; or &quot;Private&quot; visibility (Public repositories are visible to everyone)
                </li>
                <li>
                  <strong>Don&apos;t</strong> initialize the repository with a README, .gitignore, or license since we&apos;re pushing an existing repository
                </li>
                <li>
                  Click &quot;Create repository&quot;
                </li>
              </ol>
            </div>
            
            <div className="lofi-bg-dark mt-4 p-4 rounded-lg lofi-border">
              <p className="lofi-paragraph">After creating the repository, GitHub will show instructions for pushing an existing repository.</p>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🔗</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>3.3 Link Local Repository to GitHub</h2>
          </div>
          
          <div className="space-y-4">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Connect and Push to GitHub:</h3>
              <p className="lofi-paragraph mb-2">Run the following commands in your terminal, replacing the URL with your repository URL:</p>
              <div className="lofi-code-block">
                {`# Add the GitHub repository as a remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Verify the remote was added correctly
git remote -v

# Push your code to GitHub
git push -u origin main`}
              </div>
              <p className="mt-3 lofi-paragraph" style={{ color: "rgb(var(--accent-rgb))" }}>Note: If your default branch is called "master" instead of "main", use "master" in the push command.</p>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">⌨️</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>3.4 Using GitHub with Cursor</h2>
          </div>
          
          <div className="space-y-6">
            <p className="lofi-paragraph">Cursor has built-in Git integration that makes it easy to manage your code:</p>
            
            <div className="space-y-4">
              <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
                <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Source Control in Cursor:</h3>
                <ol className="list-decimal pl-6 space-y-2 lofi-paragraph">
                  <li>Click on the Source Control icon in the left sidebar (or press Ctrl+Shift+G)</li>
                  <li>You&apos;ll see changed files listed in the panel</li>
                  <li>Hover over files to stage, unstage, or discard changes</li>
                  <li>Enter a commit message and click the checkmark to commit</li>
                  <li>Use the &quot;...&quot; menu for more options like push, pull, and branch management</li>
                </ol>
              </div>
              
              <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
                <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Common Git Operations in Cursor:</h3>
                <ul className="list-disc pl-6 space-y-2 lofi-paragraph">
                  <li><strong>Stage Changes:</strong> Click the &quot;+&quot; next to a file or use the &quot;Stage All Changes&quot; button</li>
                  <li><strong>Commit:</strong> Type a commit message and click the checkmark</li>
                  <li><strong>Push:</strong> Click on the &quot;...&quot; menu and select &quot;Push&quot;</li>
                  <li><strong>Pull:</strong> Click on the &quot;...&quot; menu and select &quot;Pull&quot;</li>
                  <li><strong>Create Branch:</strong> Click on the branch name in the status bar, then &quot;Create new branch&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">📊</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>3.5 Best Practices for GitHub</h2>
          </div>
          
          <div className="space-y-4">
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Essential Git Workflow Habits:</h3>
              <ul className="list-disc pl-6 space-y-3 lofi-paragraph">
                <li>
                  <strong>Commit often:</strong> Make small, focused commits with clear messages
                </li>
                <li>
                  <strong>Use branches:</strong> Create a new branch for each feature or bugfix
                  <div className="lofi-code-block mt-2">
                    git checkout -b feature/new-feature-name
                  </div>
                </li>
                <li>
                  <strong>Pull before pushing:</strong> Always pull the latest changes before pushing
                  <div className="lofi-code-block mt-2">
                    git pull origin main
                  </div>
                </li>
                <li>
                  <strong>Use .gitignore:</strong> Make sure sensitive files and build artifacts aren&apos;t committed
                </li>
                <li>
                  <strong>Write descriptive commit messages:</strong> Explain what changes you made and why
                </li>
              </ul>
            </div>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Useful Git Commands for Troubleshooting:</h3>
              <ul className="list-disc pl-6 space-y-2 lofi-paragraph">
                <li>
                  <code className="bg-black/30 px-1 py-0.5 rounded">git status</code> - Check the status of your working directory
                </li>
                <li>
                  <code className="bg-black/30 px-1 py-0.5 rounded">git log</code> - View commit history
                </li>
                <li>
                  <code className="bg-black/30 px-1 py-0.5 rounded">git diff</code> - See changes between commits, branches, etc.
                </li>
                <li>
                  <code className="bg-black/30 px-1 py-0.5 rounded">git reset --hard HEAD</code> - Discard all local changes (use with caution)
                </li>
                <li>
                  <code className="bg-black/30 px-1 py-0.5 rounded">git branch</code> - List branches
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="lofi-flex between lofi-mt-12">
        <Link href="/cursor" className="px-5 py-2.5 lofi-border rounded-md lofi-paragraph hover:text-foreground hover:border-accent/50 transition-colors">
          ← Back to Cursor Guide
        </Link>
        <Link href="/vercel" className="lofi-button">
          Continue to Vercel Deployment →
        </Link>
      </div>
    </div>
  );
} 