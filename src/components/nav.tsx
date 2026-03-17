'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/experience',
      text: 'Experience',
    },
    // {
    //   path: '/work',
    //   text: 'Work',
    // },
  ]

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 relative mx-auto flex w-max items-center gap-5 overflow-hidden border-2 p-2.5 px-5 text-sm sm:text-base">
        {/* Scanlines */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
          }}
        />
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-border rounded-base relative z-20 border-2 px-2 py-1 transition-colors',
                path === link.path ? 'border-border' : 'border-transparent',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
        <span className="relative z-20">
          <ThemeSwitcher />
        </span>
      </nav>
    </div>
  )
}
