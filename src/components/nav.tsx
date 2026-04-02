'use client'

import { useState, useEffect } from 'react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [path])

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/experience',
      text: 'Experience',
    },
    {
      path: '/work',
      text: 'Work',
    },
  ]

  const scanlines = (
    <div
      className="pointer-events-none absolute inset-0 z-10"
      style={{
        background:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
      }}
    />
  )

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base relative mx-auto flex w-[calc(100%-2.5rem)] items-center justify-between overflow-hidden border-2 p-2.5 px-5 text-sm sm:w-max sm:justify-start sm:gap-5 sm:text-base">
        {scanlines}

        {/* Hamburger button - mobile only */}
        <button
          className="relative z-20 sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {/* Name - mobile only */}
        <span className="font-heading relative z-20 sm:hidden">
          Jackson McDonald
        </span>

        {/* Desktop links */}
        {links.map((link) => {
          return (
            <Link
              key={link.path}
              className={clsx(
                'hover:border-border rounded-base relative z-20 hidden border-2 px-2 py-1 transition-colors sm:inline',
                path === link.path ? 'border-border' : 'border-transparent',
              )}
              href={link.path}
            >
              {link.text}
            </Link>
          )
        })}
        <a
          href="https://rxresu.me/jacksonmcdonalddev/public-resume"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:border-border rounded-base relative z-20 hidden border-2 border-transparent px-2 py-1 transition-colors sm:inline"
        >
          Resume
        </a>

        <span className="relative z-20">
          <ThemeSwitcher />
        </span>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-border shadow-shadow rounded-base bg-main font-base relative mx-auto mt-2 flex w-[calc(100%-2.5rem)] flex-col overflow-hidden border-2 p-2.5 px-5 text-sm sm:hidden">
          {scanlines}
          {links.map((link) => {
            return (
              <Link
                key={link.path}
                className={clsx(
                  'hover:border-border rounded-base relative z-20 border-2 px-2 py-2 transition-colors',
                  path === link.path ? 'border-border' : 'border-transparent',
                )}
                href={link.path}
              >
                {link.text}
              </Link>
            )
          })}
          <a
            href="https://rxresu.me/jacksonmcdonalddev/public-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-border rounded-base relative z-20 border-2 border-transparent px-2 py-2 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  )
}
