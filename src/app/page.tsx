import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Jackson McDonald</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer | Product Manager</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          I'm a Product Engineer that loves taking end-to-end ownership. At
          Conduction, I'm creating software shaped solutions for user and
          business needs, like reducing onboarding time by 85% via engineering
          bulk account provisioning, or prototyping a playable ad MVP in one
          week to validate marketing strategy. As a consultant, I've saved
          expensive projects that were sitting on the shelf, aligning
          stakeholders and wireframing solutions to make the software match the
          business needs. I'm always looking for new challenges! Mostly, I just
          love problem solving and finding elegant solutions.
        </p>
      </div>

      <Links />
    </div>
  )
}
