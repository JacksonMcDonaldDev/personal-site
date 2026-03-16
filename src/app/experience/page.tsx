import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function ExperiencePage() {
  return (
    <div className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Experience</h1>

      <Experience />

      <Skills />
    </div>
  )
}
