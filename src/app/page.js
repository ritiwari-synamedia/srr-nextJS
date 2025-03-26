import { ClientTime } from "./components/ClientTime"

// This is a Server Component - it runs on every request
export default async function Home() {
  // Server-side data fetching - runs on every request
  const currentTime = new Date().toLocaleTimeString()
console.log("SSR currentTime", currentTime);

  // Fetch data from GitHub API
  // In Next.js 15, fetch is no longer cached by default
  const res = await fetch("https://api.github.com/repos/vercel/next.js", {
    // If you want to opt into caching, you can add:
    // next: { revalidate: 60 } // revalidate every 60 seconds
  })
  const repo = await res.json()

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Next.js 15 SSR Demo</div>

          <div className="mt-6 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-gray-900">Server-Side Rendered Data</h2>
            <p className="mt-2 text-gray-600">
              This time was rendered on the server:{" "}
              <span className="font-mono bg-gray-100 p-1 rounded">{currentTime}</span>
            </p>
            <p className="mt-2 text-gray-600">Refresh the page to see it change.</p>
          </div>

          {/* Client component for client-side updates */}
          <ClientTime />

          <div className="mt-6 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-gray-900">GitHub Repository Data</h2>
            <p className="mt-2 text-gray-600">
              Repository: <span className="font-semibold">{repo.full_name}</span>
            </p>
            <p className="mt-2 text-gray-600">
              Stars: <span className="font-semibold">{repo.stargazers_count.toLocaleString()}</span>
            </p>
            <p className="mt-2 text-gray-600">
              Forks: <span className="font-semibold">{repo.forks_count.toLocaleString()}</span>
            </p>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500">
              This page uses Next.js 15 Server Components for server-side rendering. The data is fetched on each request
              with no caching by default.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const dynamic = "force-dynamic";