import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

export default function Footer() {
  const router = useRouter().pathname

  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-10">
        <div className="flex mb-3 space-x-2 text-xs text-gray-500 md:text-sm dark:text-gray-400">
          Made with
          <div className="px-1">
            <Image
              height={16}
              width={16}
              src="/static/icon/white-heart.png"
              alt="white heart icon"
              className="px-3"
              quality={100}
              unoptimized={true}
            />
          </div>
          by
          <a
            href="https://zakiego.my.id"
            className="transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400 un-effect"
          >
            Zakiego
          </a>
        </div>
        {router == '/about' ? (
          ''
        ) : (
          <div className="flex space-x-6 scale-75 opacity-75 md:scale-100">
            {/* <SocialIcon kind="github" href={siteMetadata.github} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            <SocialIcon kind="medium" href={siteMetadata.medium} />
            <SocialIcon kind="spotify" href={siteMetadata.spotify} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} /> */}
          </div>
        )}
      </div>
    </footer>
  )
}
