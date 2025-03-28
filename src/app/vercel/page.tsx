import Link from "next/link";

export default function VercelPage() {
  return (
    <div className="lofi-container">
      <div className="relative lofi-mb-8">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.05)" }}></div>
        <h1 className="text-3xl font-bold mb-6 gradient-text inline-block">Step 4: Deploying to Vercel</h1>
        
        <p className="text-xl lofi-paragraph max-w-3xl">
          In this final section, we&apos;ll deploy our Next.js application to Vercel, making it accessible to the world.
        </p>
      </div>

      <div className="space-y-8">
        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🚀</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>4.1 What is Vercel?</h2>
          </div>
          
          <div className="space-y-4">
            <p className="lofi-paragraph">
              Vercel is a cloud platform for static sites and Serverless Functions that&apos;s perfectly suited for Next.js applications. It was created by the same team behind Next.js and offers:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 lofi-paragraph">
              <li>Global CDN for fast content delivery</li>
              <li>Automatic SSL certificates for secure connections</li>
              <li>Preview deployments for every git branch or PR</li>
              <li>Serverless Functions for backend logic</li>
              <li>Environment variables for configuration</li>
              <li>Custom domains for your projects</li>
            </ul>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">📋</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>4.2 Prepare Your Application</h2>
          </div>
          
          <div className="space-y-4">
            <p className="lofi-paragraph">Before deploying, make sure your application is ready:</p>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Pre-deployment Checklist:</h3>
              <ul className="list-disc pl-6 space-y-2 lofi-paragraph">
                <li>Ensure your application runs without errors locally</li>
                <li>Check that all features work as expected</li>
                <li>Make sure all changes are committed to GitHub</li>
                <li>Verify your package.json has the correct scripts:</li>
                <div className="lofi-code-block mt-2">
{`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}`}
                </div>
              </ul>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🔄</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>4.3 Deploy to Vercel</h2>
          </div>
          
          <div className="space-y-6">
            <p className="lofi-paragraph">There are multiple ways to deploy to Vercel. We&apos;ll cover the easiest method: direct integration with GitHub.</p>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Deploy using GitHub Integration:</h3>
              <ol className="list-decimal pl-6 space-y-3 lofi-paragraph">
                <li>
                  Log in to your Vercel account at <a href="https://vercel.com" className="text-link hover:text-link-hover border-b border-link/30 hover:border-link transition-colors" target="_blank" rel="noopener noreferrer">vercel.com</a>
                </li>
                <li>
                  Click &quot;Add New...&quot; and select &quot;Project&quot;
                </li>
                <li>
                  Under &quot;Import Git Repository&quot;, find and select your GitHub repository
                  <p className="text-sm mt-1 lofi-paragraph">If you don&apos;t see your repository, you may need to click &quot;Adjust GitHub App Permissions&quot; to grant Vercel access</p>
                </li>
                <li>
                  Vercel will automatically detect that it&apos;s a Next.js project and configure the build settings
                </li>
                <li>
                  (Optional) Configure environment variables if your application needs them
                </li>
                <li>
                  Click &quot;Deploy&quot;
                </li>
              </ol>
            </div>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Alternative: Deploy using Vercel CLI:</h3>
              <ol className="list-decimal pl-6 space-y-2 lofi-paragraph">
                <li>Install the Vercel CLI globally:</li>
                <div className="lofi-code-block mt-2">
                  npm install -g vercel
                </div>
                <li>Run the deployment command from your project directory:</li>
                <div className="lofi-code-block mt-2">
                  vercel
                </div>
                <li>Follow the prompts to log in and configure your project</li>
                <li>Once complete, your project will be deployed to a *.vercel.app URL</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🔁</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>4.4 Continuous Deployment</h2>
          </div>
          
          <div className="space-y-4">
            <p className="lofi-paragraph">
              One of the best features of Vercel is continuous deployment. Once set up, every time you push changes to your GitHub repository, Vercel will automatically deploy them.
            </p>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>How It Works:</h3>
              <ol className="list-decimal pl-6 space-y-2 lofi-paragraph">
                <li>Make changes to your code locally</li>
                <li>Commit the changes to Git</li>
                <li>Push to GitHub</li>
                <div className="lofi-code-block mt-2">
                  git push origin main
                </div>
                <li>Vercel automatically detects the new commit and starts a new deployment</li>
                <li>Once the build completes, your changes are live</li>
              </ol>
            </div>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Preview Deployments:</h3>
              <p className="lofi-paragraph">
                When you create a pull request, Vercel will deploy a preview version of your application with the changes. This allows you to test changes before merging them into the main branch.
              </p>
              <p className="mt-2 lofi-paragraph">
                Each PR gets its own unique URL for testing, making team collaboration seamless.
              </p>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">🌐</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>4.5 Custom Domains</h2>
          </div>
          
          <div className="space-y-4">
            <p className="lofi-paragraph">
              Once your application is deployed, you can add a custom domain to make it more professional.
            </p>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Adding a Custom Domain:</h3>
              <ol className="list-decimal pl-6 space-y-2 lofi-paragraph">
                <li>Go to your project on the Vercel dashboard</li>
                <li>Click on &quot;Settings&quot; at the top</li>
                <li>Select &quot;Domains&quot; from the left sidebar</li>
                <li>Enter your domain name and click &quot;Add&quot;</li>
                <li>Follow the instructions to configure your DNS settings</li>
              </ol>
              <p className="mt-2 lofi-paragraph">
                Vercel will provide you with specific instructions based on your domain registrar. Typically, you&apos;ll need to add either a CNAME or A record pointing to Vercel&apos;s servers.
              </p>
            </div>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>SSL Certificates:</h3>
              <p className="lofi-paragraph">
                Vercel automatically provisions SSL certificates for all domains, including custom domains. This ensures your site is always served over HTTPS for better security.
              </p>
            </div>
          </div>
        </section>

        <section className="lofi-card">
          <div className="lofi-flex mb-4">
            <div className="w-10 h-10 rounded-full lofi-flex center mr-4" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.2)" }}>
              <span className="text-xl">📊</span>
            </div>
            <h2 className="text-2xl font-bold" style={{ color: "rgb(var(--accent-rgb))" }}>4.6 Monitoring and Analytics</h2>
          </div>
          
          <div className="space-y-4">
            <p className="lofi-paragraph">
              Vercel provides basic analytics and monitoring for your deployed applications.
            </p>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Deployment Monitoring:</h3>
              <ul className="list-disc pl-6 space-y-2 lofi-paragraph">
                <li><strong>Build Logs:</strong> View logs from the build process to troubleshoot issues</li>
                <li><strong>Deployment History:</strong> See all previous deployments and their status</li>
                <li><strong>Rollbacks:</strong> Easily roll back to a previous deployment if needed</li>
              </ul>
            </div>
            
            <div className="lofi-bg-dark p-5 rounded-lg lofi-border">
              <h3 className="font-semibold mb-3" style={{ color: "rgb(var(--link-rgb))" }}>Performance Monitoring:</h3>
              <p className="lofi-paragraph">
                Vercel offers Web Vitals monitoring to help you track and improve your application&apos;s performance.
              </p>
              <ul className="list-disc pl-6 space-y-2 lofi-paragraph mt-2">
                <li>Largest Contentful Paint (LCP)</li>
                <li>First Input Delay (FID)</li>
                <li>Cumulative Layout Shift (CLS)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="lofi-flex between lofi-mt-12">
        <Link href="/github" className="px-5 py-2.5 lofi-border rounded-md lofi-paragraph hover:text-foreground hover:border-accent/50 transition-colors">
          ← Back to GitHub Guide
        </Link>
        <Link href="/" className="lofi-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 