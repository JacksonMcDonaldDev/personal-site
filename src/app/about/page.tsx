import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Software Engineer and Product Manager who ships product and writes the
          code behind it. My work includes engineering a bulk provisioning system
          that cut user onboarding time by 85%, rapidly prototyping and shipping
          a playable ad MVP to validate a new acquisition channel, and
          revitalizing stalled development lifecycles as a product consultant. I
          deliver software that drives measurable business outcomes.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
