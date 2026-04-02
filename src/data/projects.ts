const PROJECTS: {
  name: string
  description: string
  previewImage?: string
  previewVideo?: string
  liveLink?: string
  repoUrl?: string
  company?: string
}[] = [
  {
    name: 'Conduction',
    description: 'An ed-tech platform that brings music composition into K-12 classrooms. I built a bulk account provisioning system that cut teacher setup time by ~85% and shipped a playable ad MVP in one week using TypeScript and React.',
    previewVideo: '/videos/conduction-preview.webm',
    liveLink: 'https://www.conduction.live/',
    company: 'Conduction',
  },
]

export default PROJECTS
