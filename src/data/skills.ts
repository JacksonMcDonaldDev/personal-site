import { type ComponentType } from 'react'
import {
  SiCss3,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGoogleanalytics,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLinear,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiAmazonaws,
} from '@icons-pack/react-simple-icons'
import {
  Accessibility,
  Blocks,
  ClipboardList,
  Database,
  FlaskConical,
  Globe,
  IterationCcw,
  PenTool,
  Sparkles,
  Users,
} from 'lucide-react'

type SkillIcon = ComponentType<{ className?: string; title?: string }>

const SKILLS: { field: string; skills: { skill: string; icon: SkillIcon }[] }[] =
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
        { skill: 'Web Accessibility', icon: Accessibility },
      ],
    },
    {
      field: 'Backend',
      skills: [
        { skill: 'Node.js', icon: SiNodedotjs },
        { skill: 'Python', icon: SiPython },
        { skill: 'PostgreSQL', icon: SiPostgresql },
        { skill: 'REST APIs', icon: Globe },
        { skill: 'SQL', icon: Database },
        { skill: 'AWS', icon: SiAmazonaws },
        { skill: 'Docker', icon: SiDocker },
        { skill: 'Git', icon: SiGit },
        { skill: 'CI/CD', icon: SiGithubactions },
      ],
    },
    {
      field: 'Product',
      skills: [
        { skill: 'Product Management', icon: ClipboardList },
        { skill: 'User Research', icon: Users },
        { skill: 'A/B Testing', icon: FlaskConical },
        { skill: 'Wireframing', icon: PenTool },
        { skill: 'Agile', icon: IterationCcw },
        { skill: 'SDLC', icon: Blocks },
      ],
    },
    {
      field: 'Tools',
      skills: [
        { skill: 'Figma', icon: SiFigma },
        { skill: 'Google Analytics', icon: SiGoogleanalytics },
        { skill: 'Linear', icon: SiLinear },
        { skill: 'Jira', icon: SiJira },
        { skill: 'Claude', icon: Sparkles },
      ],
    },
  ]

export default SKILLS
