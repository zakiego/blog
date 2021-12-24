import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  const router = useRouter().pathname

  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-10">
        <div className="flex mb-3 space-x-2 text-xs text-gray-500 md:text-sm dark:text-gray-400">
          Made with {'🤍'} by {' '}
          <a
            href={siteMetadata.twitter}
            className="transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400 un-effect"
          >
            Zakiego
          </a>
        </div>
        {router == '/about' ? (
          ''
        ) : (
          <div className="flex space-x-6 scale-75 opacity-75 md:scale-100">
            <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            <SocialIcon kind="medium" href={siteMetadata.medium} />
            <SocialIcon kind="spotify" href={siteMetadata.spotify} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} />
          </div>
        )}
      </div>
    </footer>
  )
}
