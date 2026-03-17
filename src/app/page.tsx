import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="font-heading text-2xl sm:text-4xl">
        Jackson McDonald
      </h1>
      <p className="mt-2 text-lg sm:text-xl">
        Software Engineer | Product Consultant
      </p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          I&apos;m a Product Engineer that focuses on taking end-to-end
          ownership. At Conduction, I&apos;m creating software shaped solutions
          for user and business needs, like reducing onboarding time by 85% via
          engineering bulk account provisioning, or prototyping a playable ad
          MVP in one week to validate marketing strategy. As a consultant,
          I&apos;ve saved expensive projects that were sitting on the shelf,
          aligning stakeholders and wireframing solutions to make the software
          match the business needs. I love figuring out what to build and{' '}
          <i>why</i> to build it.<span className="crt-cursor">_</span>
        </p>
      </div>

      <Links />
    </div>
  )
}
