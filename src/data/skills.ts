import {
  type IconType,
  SiCss3,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiAmazonaws,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'TypeScript', icon: SiTypescript },
        { skill: 'React', icon: SiReact },
        { skill: 'Next.js', icon: SiNextdotjs },
        { skill: 'JavaScript', icon: SiJavascript },
        { skill: 'Tailwind', icon: SiTailwindcss },
        { skill: 'HTML', icon: SiHtml5 },
        { skill: 'CSS', icon: SiCss3 },
      ],
    },
    {
      field: 'Backend',
      skills: [
        { skill: 'Node.js', icon: SiNodedotjs },
        { skill: 'Python', icon: SiPython },
        { skill: 'PostgreSQL', icon: SiPostgresql },
        { skill: 'AWS', icon: SiAmazonaws },
        { skill: 'Docker', icon: SiDocker },
        { skill: 'Git', icon: SiGit },
        { skill: 'CI/CD', icon: SiGithubactions },
      ],
    },
  ]

export default SKILLS
