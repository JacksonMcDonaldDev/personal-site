const PAST_ROLES: {
  company: string
  role: string
  description: string[]
  startDate: string
  endDate: string
}[] = [
  {
    company: 'Conduction',
    role: 'Software Engineer / Product',
    description: [
      'Discovered through user interviews that student account setup was eating an entire class period — designed a bulk provisioning system that gets classrooms up and running in minutes on day one, cutting setup time by ~85%.',
      'Built a playable ad MVP in one week with TypeScript and React to test a new acquisition channel.',
      'Created a CRM enrichment pipeline so sales and marketing could run smarter, more targeted campaigns.',
    ],
    startDate: 'February 2024',
    endDate: 'Now',
  },
  {
    company: 'HRS Commercial',
    role: 'Lead Product Consultant',
    description: [
      'Owned the product roadmap and feature prioritization, turning executive goals into actionable technical specs.',
      'Redesigned the app\'s core navigation and input flows to reduce usability friction.',
      'Served as the lead technical decision-maker for an external development agency.',
    ],
    startDate: 'February 2025',
    endDate: 'September 2025',
  },
  {
    company: '100Devs',
    role: 'Software Engineer',
    description: [
      'Built and deployed full-stack web applications for small business clients using React, Node.js, and PostgreSQL, managing the full lifecycle from requirements gathering and wireframing to deployment and handover.',
    ],
    startDate: 'January 2022',
    endDate: 'January 2024',
  },
]

export default PAST_ROLES
