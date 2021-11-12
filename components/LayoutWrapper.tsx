import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import ShowBreakpoint from '@/layouts/ShowBreakpoint'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter().pathname

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-4">
          <div>
            <Link href="/" aria-label="Blog Zakiego">
              <div className="flex items-center justify-between text-2xl font-semibold">
                {siteMetadata.headerTitle}
              </div>
            </Link>
          </div>
          <ShowBreakpoint />
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`${
                    link.href == router
                      ? 'text-primary-500 dark:text-primary-500 '
                      : 'hover:text-primary-500 dark:hover:text-primary-500 un-effect'
                  } font-medium text-gray-900 sm:p-4 dark:text-gray-100  `}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
