import Link from "next/link";

export default function GitHubPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Step 3: Connecting to GitHub</h1>
      
      <div className="mb-12">
        <p className="text-xl mb-4">
          In this section, we&apos;ll connect our Next.js application to GitHub for version control and collaboration.
        </p>
      </div>

      <div className="space-y-12">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">3.1 Initialize Git Repository</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Set Up Local Git Repository:</h3>
              <p>Open a terminal in Cursor and run these commands:</p>
              <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono text-sm">
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

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">3.2 Create a GitHub Repository</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Steps to Create a Repository:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Log in to your GitHub account at <a href="https://github.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com</a>
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
            
            <div className="mt-4">
              <p className="text-gray-600">After creating the repository, GitHub will show instructions for pushing an existing repository.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">3.3 Link Local Repository to GitHub</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Connect and Push to GitHub:</h3>
              <p>Run the following commands in your terminal, replacing the URL with your repository URL:</p>
              <div className="bg-gray-800 text-white p-3 rounded mt-2 font-mono text-sm">
                {`# Add the GitHub repository as a remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Verify the remote was added correctly
git remote -v

# Push your code to GitHub
git push -u origin main`}
              </div>
              <p className="mt-2 text-yellow-600">Note: If your default branch is called "master" instead of "main", use "master" in the push command.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">3.4 Using GitHub with Cursor</h2>
          
          <div className="space-y-6">
            <p>Cursor has built-in Git integration that makes it easy to manage your code:</p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Source Control in Cursor:</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Click on the Source Control icon in the left sidebar (or press Ctrl+Shift+G)</li>
                  <li>You'll see changed files listed in the panel</li>
                  <li>Hover over files to stage, unstage, or discard changes</li>
                  <li>Enter a commit message and click the checkmark to commit</li>
                  <li>Use the "..." menu for more options like push, pull, and branch management</li>
                </ol>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Common Git Operations in Cursor:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Stage Changes:</strong> Click the "+" next to a file or use the "Stage All Changes" button</li>
                  <li><strong>Commit:</strong> Type a commit message and click the checkmark</li>
                  <li><strong>Push:</strong> Click on the "..." menu and select "Push"</li>
                  <li><strong>Pull:</strong> Click on the "..." menu and select "Pull"</li>
                  <li><strong>Create Branch:</strong> Click on the branch name in the status bar, then "Create new branch"</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">3.5 Best Practices for GitHub</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Essential Git Workflow Habits:</h3>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Commit often:</strong> Make small, focused commits with clear messages
                </li>
                <li>
                  <strong>Use branches:</strong> Create a new branch for each feature or bugfix
                  <div className="bg-gray-800 text-white p-2 rounded mt-1 font-mono text-sm">
                    git checkout -b feature/new-feature-name
                  </div>
                </li>
                <li>
                  <strong>Pull before pushing:</strong> Always pull the latest changes before pushing
                  <div className="bg-gray-800 text-white p-2 rounded mt-1 font-mono text-sm">
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
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Useful Git Commands for Troubleshooting:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded">git status</code> - Check the status of your working directory
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded">git log</code> - View commit history
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded">git diff</code> - See changes between commits, branches, etc.
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded">git reset --hard HEAD</code> - Discard all local changes (use with caution)
                </li>
                <li>
                  <code className="bg-gray-200 px-1 py-0.5 rounded">git branch</code> - List branches
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link href="/cursor" className="px-5 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          ← Back to Cursor Guide
        </Link>
        <Link href="/vercel" className="bg-blue-500 text-white px-5 py-2.5 rounded-md hover:bg-blue-600 transition-colors">
          Continue to Vercel Deployment →
        </Link>
      </div>
    </div>
  );
} 