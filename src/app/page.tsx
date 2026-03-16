import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Jackson McDonald</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer | Product Manager</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Software Engineer and Product Manager who ships product and writes the
          code behind it. I build in TypeScript, React, Python and Node.js while
          owning roadmaps, user research, and stakeholder alignment.
        </p>
      </div>

      <Links />
    </div>
  )
}
